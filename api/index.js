const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

const app = express();
const port = 6000;
const cors = require("cors");
app.use(cors());

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

const jwt = require("jsonwebtoken");
const User = require("./modals/User");

mongoose
  .connect(
    "mongodb+srv://xthaswagat69:swagat@cluster0.rhyw5tv.mongodb.net/",
    {}
  )
  .then(() => {
    console.log("Connected to the MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to the mongoDB", err);
  });

app.listen(port, () => {
  console.log("Server running on Port", port);
});

//
const sendVerificationEmail = async (email, verificationToken) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "xtha.swagat69@gmail.com",
      pass: "iyrh jfaw aldm hado",
    },
  });

  const mailOptions = {
    from: "ecommerce.com",
    to: email,
    subject: "Email Verification",
    text: `Please click on the link below to verify your Account : http://localhost:6000/verify/${verificationToken}`,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log("Error Sending Verification Mail", error);
  }
};

//EndPoints
app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Already have an Account with this Email" });
    }

    const newUser = new User({ name, email, password });

    newUser.verificationToken = crypto.randomBytes(10).toString("hex");

    await newUser.save();

    //send verification email
    sendVerificationEmail(newUser.email, newUser.verificationToken);
  } catch (error) {
    console.log("Error Registering User", error);
    res.status(500).json({ message: "Registration failed" });
  }
});

//verify email
app.get("/verify/:token", async (req, res) => {
  try {
    const token = req.params.token;

    const user = await User.findOne({ verificationToken: token });

    if (!user) {
      return res.status(404).json({ message: "Invalid verification Token" });
    }

    user.verified = true;
    user.verificationToken = undefined;

    await user.save();

    res.status(200).json({ message: "Email Verified Successfully" });
  } catch (error) {
    console.log("Email Verification fail", error);
    res.status(500).json({ message: "Email Verification Fail" });
  }
});
