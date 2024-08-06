package io.honeydemo.otelo11ydemo.consumer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.logging.Logger;

import java.io.StringWriter;
import java.io.PrintWriter;
import io.opentelemetry.api.GlobalOpenTelemetry;
import io.opentelemetry.api.trace.Tracer;
import io.opentelemetry.api.trace.Span;
import io.opentelemetry.api.common.Attributes;

@Service
public class DatabaseService {

    private static final Logger log = Logger.getLogger(DatabaseService.class.getName());

    @Autowired
    private JdbcTemplate jdbcTemplate;

    private static final Tracer tracer = GlobalOpenTelemetry.getTracer("consumer-java-database");

    public List<String> queryDb() {
        logit("this is just to note i have done something against the DB");
        logit("queried DB");

        
        Span span = tracer.spanBuilder("queryDb").startSpan();
        span.makeCurrent();
        try {
            List<String> results = jdbcTemplate.query("SELECT * FROM test",
                    (rs, rowNum) -> rs.getString("sometext"));
            span.addEvent("queried DB");
            return pureDbProc(results);
        }
        catch(Exception e) {
            span.setAttribute("error", true);
            StringWriter sw = new StringWriter();
            PrintWriter pw = new PrintWriter(sw);
            e.printStackTrace(pw);
            Attributes eventAttributes = Attributes.builder().put("exception", sw.toString()).build();
            span.addEvent(e.getMessage(), eventAttributes);
            throw e;
        } 
        finally {
            span.end();
        }
    }

    private List<String> pureDbProc(List<String> rows) {
        Span span = tracer.spanBuilder("pureDbProc").startSpan();
        span.makeCurrent();
        rows.add("some other thing");
        span.setAttribute("db.rows", rows.size());
        span.end();
        return rows;
    }

    private void logit(String msg) {
        log.warning(msg);
    }
}
