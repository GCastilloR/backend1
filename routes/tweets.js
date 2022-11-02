const express = require("express");
const router = express.Router();
const Tweet = require("../models/Tweet");
const logic = require("../config/logic");

router.get("/:id", logic.checkTweet, (req, res) => {
    return res.status(200).json({ tweet: req.tweet });
});
  

router.get("/user/:username", logic.checkUser, async (req, res) => {
    try {
        const tweets= await Tweet.find({username: req.user.username,}.sort({ createdAt: -1 }))
        return res.status(200).json({ tweets });
    } catch (error) {
        return res.status(400).json({ error });
    }
});

module.exports = router;