const { response } = require("express");

const isAutharizedAdmin = (req,res,next) => {

    // check if the admin is an authorized admin
    token = "xyz";
    if(token !== "xyz"){
        res.status(401).send("Unauthorized Access !!");
    }
    else{
        next();
    }
}

module.exports = {
    isAutharizedAdmin
}