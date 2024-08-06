package io.honeydemo.otelo11ydemo.consumer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import java.util.List;
import java.util.Random;
import java.util.logging.Logger;

import java.io.StringWriter;
import java.io.PrintWriter;
import io.opentelemetry.api.GlobalOpenTelemetry;
import io.opentelemetry.api.trace.Tracer;
import io.opentelemetry.api.trace.Span;
import io.opentelemetry.api.common.Attributes;

@Component
public class Receiver {

    private static final Logger log = Logger.getLogger(Receiver.class.getName());
    private static final Random random = new Random();
    private static final Tracer tracer = GlobalOpenTelemetry.getTracer("consumer-java-queue-receiver");

    @Autowired
    private DatabaseService databaseService;

    public void receiveMessage(byte[] body) {
        Span span = tracer.spanBuilder("receiveMessage").startSpan();
        span.makeCurrent();
        try {
            logit("this is an event log just to show something important was processed");

            if (goSlowP()) {
                Thread.sleep(1500);
            }

            String message = new String(body, "UTF-8");
            logit("on_message body : " + message);
            span.setAttribute("message.body", message);

            databaseService.queryDb();

            logit(pureMessageProc(message));
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
}
