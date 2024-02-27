const express = require("express");
const Users = require("../db/models/Users.js");

const emailCheck = async (req, res, next) => {
  //search the database to see if email exist
  try {
    const emailCheck = await Users.findOne({
      where: {
        email: req.body.email,
      },
    });
    //if email exist in the database respond with a status of 409
    if (emailCheck) {
      return res.status(409).send("This email already exist");
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { emailCheck };
