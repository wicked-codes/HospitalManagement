const winston = require("winston");
const {colorize, timestamp, prettyPrint, json, combine, cli} = winston.format;

const logger = winston.createLogger(
    {
        transports:[
            new winston.transports.Console(
                {
                    format: combine(cli(), timestamp(), colorize({all:true})),
                    level: "info"
                }
            ),
            new winston.transports.File(
                {
                    filename: "./logs/combined.log",
                    format: combine(json(), prettyPrint(), timestamp()),
                    level: "info"
                }
            )
        ]
    }
);

module.exports = {
    logger
}