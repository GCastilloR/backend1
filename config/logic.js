const mongoose = require("mongoose");
const User = require("../models/User");
const Tweet = require("../models/Tweet");

const checkUser = async (req, res, next) => {
    try {
        const { username } = req.params;
        const user = await User.findOne({ username: new RegExp(`^${username}$`, "i") })
        if (!user) {
            res.status(400).send("No profile found for this user.");
        } else {
            req.user = user;
            next();
        }
    } catch (error) {
        res.status(500).json({ error });
    }
}

const checkTweet = async (req, res, next) => {

    try {
        const { id } = req.params;
        const tweet = await Tweet.findById(id)
        if (!tweet) {
            res.status(400).send("This tweet does not exist.");
        } else {
            req.tweet = tweet;
            next();
        }
    } catch (error) {
        res.status(500).json({ error })
    }
};

module.exports = { checkUser, checkTweet };