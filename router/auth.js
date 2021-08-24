const express = require("express");
const router = express.Router();

// const Connection=require('../db/conn.js');
const User = require("../model/userSchema");
const Feed = require("../model/feedBack");
// Connection();

router.get("/", (req, res) => {
  res.send("hi form home page 2 router");
});

router.post("/contact", async (req, res) => {
  const { name, email, phone, description } = req.body;
  if (!name || !email || !description || !phone)
    return res.status(422).json({ error: "hat bhar de " });
  if (description.length <= 10)
    return res.status(422).json({ error: "provide proper description " });
  try {
    const user = new User({ name, email, phone, description });
    await user.save();

    res.status(201).json({ message: "sent " });
  } catch (err) {
    console.log(err);
  }
});

router.post("/feedback", async (req, res) => {
  const { name, description } = req.body;

  if (!name || !description)
    return res.status(422).json({ error: "hat bhar de " });
  if (description.length <= 10)
    return res.status(422).json({ error: "provide proper description " });
  try {
    const user = new Feed({ name, description });
    await user.save();

    res.status(201).json({ message: "sent " });
  } catch (err) {
    console.log(err);
  }
});

router.get("/about", (req, res) => {
  res.send("from about page");
});

module.exports = router;
