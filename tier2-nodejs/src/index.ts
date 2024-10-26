import express, { Request, Response } from 'express';
import mysql from 'mysql2';
import winston from 'winston';

const app = express();

// Logger setup
const logger = winston.createLogger({
    level: 'warn',
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
    ),
    transports: [
        new winston.transports.Console()
    ]
});

function logit(msg: string): void {
    // Making sure we are printing out to stderr
    // so log can be seen while running docker-compose
    logger.warn(msg);
}

function pureDbProc(rows: any[]): any[] {
    // This is attempting to show use of a pure function that
    // should not be polluted with side effects
    return [...rows, "some other thing"];
}

function queryDb(error = false): Promise<any[]> {
    // This is some imperative shell that is calling some DB and then
    // is being processed by some pure function that returning that
    logit("this is some important log that is used to update product owners that an event was successful");

    if(error == true) {
        throw new Error("Exception occurred when trying to query database.");
    }

    // Database connection
    const db = mysql.createConnection({
        host: 'db',
        user: 'test',
        password: 'test',
        database: 'test'
    });
    
    db.connect((err) => {
        if (err) {
            logger.error('Database connection failed:', err);
            return;
        }
        logger.info('Connected to database');
    });

    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM test', (err , result: any[]) => {
            if (err) {
                logit('Database query failed');
                return reject(err);
            }
            resolve(pureDbProc(result));
        });
        logit("queried DB");
        db.end((err2) => {
            if(err2) {
                console.error('Error closing connection: ' + err2.stack);
                return reject(err2);
            }
        });
    });
}

app.get('/', async (req: Request, res: Response) => {
    try {
        await queryDb();
        res.send(`tier 2 ${Date.now()}`);
    } catch (err) {
        res.status(500).send('Internal Server Error');
    }
});

app.get('/error', async (req: Request, res: Response) => {
    var error = true
    try {
        await queryDb(error);
    } catch (err) {
        res.status(500).send('Internal Server Error');
    }
});

app.listen(8080, () => {
    logger.info('Server is running on port 8080');
});
