const express = require("express")
const app = express()
const logger = require("morgan")
const PORT = 3000

app.listen(PORT, (err) => {
    console.log(err || "Server running on port 3000")
})