const express = require('express')
const router = express.Router()

var admin = require('../Controllers/admin');

    
router.post("/login",admin.login);
    
router.get("/get_data",admin.get_data);


module.exports = router



      