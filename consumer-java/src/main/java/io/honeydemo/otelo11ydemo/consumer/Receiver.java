package io.honeydemo.otelo11ydemo.consumer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import java.util.List;
import java.util.Random;
import java.util.logging.Logger;
import java.util.Collections;
import java.util.Map;

import java.io.StringWriter;
import java.io.PrintWriter;
import org.springframework.amqp.core.Message;
import org.springframework.amqp.core.MessageProperties;
import io.opentelemetry.api.GlobalOpenTelemetry;
import io.opentelemetry.api.trace.Tracer;
import io.opentelemetry.api.trace.Span;
import io.opentelemetry.api.trace.SpanContext;
import io.opentelemetry.api.common.Attributes;
import io.opentelemetry.context.Context;
import io.opentelemetry.api.trace.propagation.W3CTraceContextPropagator;
import io.opentelemetry.context.propagation.TextMapGetter;
import io.opentelemetry.context.propagation.TextMapPropagator;

@Component
public class Receiver {

    private static final Logger log = Logger.getLogger(Receiver.class.getName());
    private static final Random random = new Random();
    private static final Tracer tracer = GlobalOpenTelemetry.getTracer("consumer-java-queue-receiver");

    @Autowired
    private DatabaseService databaseService;

    public void receiveMessage(Message message) {
        byte[] body = message.getBody();

        MessageProperties msgProperties = message.getMessageProperties();
        String traceParent = (String)msgProperties.getHeaders().get("traceparent");
        SpanContext ctx = parseTraceparent(traceParent);
        Span span = tracer.spanBuilder("receiveMessage")
            .setParent(Context.current().with(Span.wrap(ctx)))
            .startSpan();
        span.makeCurrent();
        span.setAttribute("message.header", msgProperties.getHeaders().toString());

        try {
            logit("this is an event log just to show something important was processed");

            if (goSlowP()) {
                Thread.sleep(1500);
            }

            String bodyMessage = new String(body, "UTF-8");
            logit("on_message body : " + bodyMessage);
            span.setAttribute("message.body", bodyMessage);
            databaseService.queryDb();

            logit(pureMessageProc(bodyMessage));
        } catch (Exception e) {
            log.severe("Unexpected error: " + e.getMessage());
            span.setAttribute("error", true);
            StringWriter sw = new StringWriter();
            PrintWriter pw = new PrintWriter(sw);
            e.printStackTrace(pw);
            Attributes eventAttributes = Attributes.builder().put("exception", sw.toString()).build();
            span.addEvent(e.getMessage(), eventAttributes);
        } finally {
            span.end();
        }
    }

    private void logit(String msg) {
        log.warning(msg);
    }

    private boolean goSlowP() {
        return random.nextDouble() * 100 > 95;
    }

    private String pureMessageProc(String message) throws Exception {
        if (message.startsWith("error")) {
            throw new Exception(message);
        }
        return message + "-plus-some-message-proc";
    }

    // internal method to parse given 'traceparent' inside message property's header
    private static SpanContext parseTraceparent(String traceparent) {
        TextMapPropagator propagator = W3CTraceContextPropagator.getInstance();
        Map<String, String> headers = Collections.singletonMap("traceparent", traceparent);
        
        Context context = propagator.extract(Context.current(), headers, new TextMapGetter<Map<String, String>>() {
            @Override
            public Iterable<String> keys(Map<String, String> carrier) {
                return carrier.keySet();
            }

            @Override
            public String get(Map<String, String> carrier, String key) {
                return carrier.get(key);
            }
        });
        return Span.fromContext(context).getSpanContext();
    }
}
