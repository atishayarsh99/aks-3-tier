const mongoose = require("mongoose")

 const {userModel} = require("../Models/userModel")



exports.login = async function (req, res) {
  try {
    let payload = req.body;
    
    let save_details = await userModel.create(payload)
 
    return res.status(200).json({
      message:"success12",
      data:save_details
    })
  } catch (e) {
      return res.status(400).json({
        message:"fail",
        data:e.message
      })
    }
};


exports.get_data = async function (req, res) {
  try {
  
    let save_details = await userModel.find({})
 
    return res.status(200).json({
      message:"success12",
      data:save_details
    })
  } catch (e) {
      return res.status(400).json({
        message:"fail",
        data:e.message
      })
    }
};




