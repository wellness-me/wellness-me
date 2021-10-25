const mongoose = require('mongoose');
const app = require("./app")
const logger = require("./utils/logger");

// use dev when testing
const db_type = process.env.USE_DEV ? "wellness-dev" : "wellness-prod"

mongoose.connect(process.env.MONGO_URL + db_type).then(() => {
    // connect to DB and start running server
    logger.info("Connected to MongoDB")

    app.listen(process.env.PORT, () => {
        logger.info(`Listening on port ${process.env.PORT}`)
    })
})
