const winston = require("winston")
require('dotenv').config()

const logger = winston.createLogger({
    level: process.env.USE_DEV ? 'debug' : 'info',
    format: winston.format.combine(
      process.env.USE_DEV ? winston.format.colorize() : winston.format.uncolorize(),
      winston.format.splat(),
      winston.format.printf(({ level, message }) => `${level}: ${message}`)
    ),
    transports: [
      new winston.transports.Console({
        stderrLevels: ['error'],
      }),
    ],
});

module.exports = logger