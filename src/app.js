const express = require("express");
const {isAutharizedAdmin} = require("./middleware/auth");

const app = express();

app.use("/admin", isAutharizedAdmin);

app.get("/admin/settings", (req,res,next) => {
    console.log("Reached route for /admin/settings");
    res.send("You have reached the admin settings page");
});

app.get("/admin/getUser", (req,res,next) => {
    console.log("Reached route for /admin/getUser");
    res.send("You have reached the admin user's page");
});

app.listen(7777, () => console.log("Server running & listening to port 7777"));
