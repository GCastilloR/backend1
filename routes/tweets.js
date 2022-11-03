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

router.post("/tweet", (req, res) => {
    const { tweet } = req.body;
  
    if (!tweet) {
      return res.status(400).send("You must supply a tweet in the request body.");
    }
  
    const tweetData = new Tweet({
      username: req.session.username,
      tweet,
      retweets: [],
      likes: [],
    });
  
    tweetData
      .save()
      .then(() => {
        return res.redirect(`/tweets`);
      })
      .catch((error) => {
        return res.status(500).json({ error });
      });
});



module.exports = router;