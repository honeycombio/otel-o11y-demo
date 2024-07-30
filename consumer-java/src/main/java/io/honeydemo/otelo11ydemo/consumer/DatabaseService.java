package io.honeydemo.otelo11ydemo.consumer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.logging.Logger;

@Service
public class DatabaseService {

    private static final Logger log = Logger.getLogger(DatabaseService.class.getName());

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public List<String> queryDb() {
        logit("this is just to note i have done something against the DB");
        logit("queried DB");

        List<String> results = jdbcTemplate.query("SELECT * FROM test",
                (rs, rowNum) -> rs.getString("sometext"));

        return pureDbProc(results);
    }

    private List<String> pureDbProc(List<String> rows) {
        rows.add("some other thing");
        return rows;
    }

    private void logit(String msg) {
        log.warning(msg);
    }
}
