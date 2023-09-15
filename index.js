const express = require("express");

const app = express()

app.get("/", (req, res) => {
    res.send('hello world')
});

app.listen(3002, () => {
    console.log("Hai Bro, Servermu udah jalan di http://localhost:3002"); // IP:127.0.0.1 -> domain=> localhost
});