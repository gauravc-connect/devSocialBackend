console.log("Welcome to the dev social platform backend");

const express = require("express");

const app = express();

app.use("/test", (req,res) => {
    res.send("Hello from test route...");
});

app.listen(7777, () => console.log("Server running & listening to port 7777"));

