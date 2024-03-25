const jwt = require('jsonwebtoken');
const { adminSessionModel} = require("../Models/adminSession");
const { sessionTokenModel } = require('../Models/sessionToken')


exports.verifyToken = (req, res, next) => {

    const token = req.headers.access_token;

    if (!token) return res.status(401).send({
        auth: false,
        message: 'No token provided'
    });

    // verifies secret and check expiration
    jwt.verify(token, 'supersecret', async function (err, decoded) {
        if (err)
            return res.status(401).send({
                auth: false,
                message: 'unauthorized'
                
            });

        let user = await sessionTokenModel.findOne({
            access_token: token
        }).lean(true)
        
        if (!user)
            return res.status(401).send({
                auth: false,
                message: 'Your account has been logged into another system,Please login again'
            });
        req.userData = user;
        req.userId = user.user_id
        next();
    });
};

exports.adminVerifyToken = (req, res, next) => {

    // check header or url parameters or post parameters for token
    const token = req.headers.access_token;
    if (!token) return res.status(401).send({
        auth: false,
        message: 'No token provided'
    });

    // verifies secret and check expiration
    jwt.verify(token, 'supersecret', async function (err, decoded) {
        if (err)
            return res.status(500).send({
                auth: false,
                message: 'unauthorized'
            });

        // if everything is good, save to request for use in other routes

        let user = await adminSessionModel.findOne({
            access_token: token
        }).lean(true)
        // if everything is good, save to request for use in other routes
        if (!user)
            return res.status(401).send({
                auth: false,
                message: 'unauthorized'
            });
        req.userData = user
        next();
    });
};