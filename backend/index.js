const app = require("./app")

app.listen(process.env.PORT, () => {
    console.log(`App running at http://localhost:${process.env.PORT}`)
})
