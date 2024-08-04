import winston from "winston";

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        new winston.transports.File({ filename: 'info.log' }),
    ],
});

const logHandler = (req, res, next) => {
    let logContent = `DATE -> ${new Date()} : METHOD -> ${req.method} : PATH -> ${req.url} : BODY -> ${JSON.stringify(req.body)}`
    logger.info(logContent)
    next()
}

export default logHandler;