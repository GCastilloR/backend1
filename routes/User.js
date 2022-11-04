const express = require("express");
const router = express.Router();
const Tweet = require("../models/Tweet");
const logic = require("../config/logic");
const User = require("../models/User");

router.get('/:username', async (req, res) => {
    try {
        let user = await User.findOne({ username: new RegExp(`^${username}$`, "i") })
        if (user) {
            return res.json(user)
        } else {
            return res.status(404).json("User not found");
        }
        
    } catch (error) {
        res.status(500).json(error)
    }
})

router.post('/user', async (req, res) => {

    try {

        let { username, password } = req.body;

        if (!username) {
            return res.status(422).json("Username Required" );
        } else if (!password) {
            return res.status(422).json("Password Required");
        } else {
            let user = await User.findOne({ username: new RegExp(`^${username}$`, "i") })
            if (user) {
                return res.status(422).json("Username already in use");
            } else {
                const user = await new User({username,password}).save()
            }
        }

    } catch (error) {
        res.status(500).json(error)
    }

})

router.patch('/:username', async (req, res) => {
    const {username, password}= req.body;
    try {
        let user = await User.findOne({ username: new RegExp(`^${username}$`, "i") })
        if (user) {
            req.user.username= username;
            req.user.password= password;
            req.user.save().then(() => {
              return res.status(200).json(req.user);
            })
        } else {
            return res.status(404).json("User not found");
        }
        
    } catch (error) {
        res.status(500).json(error)
    }
})

router.delete('/:username', async (req, res) => {
    try {
        let user = await User.findOne({ username: new RegExp(`^${username}$`, "i") })
        if (user) {
            req.user.remove((error, result) => {
                if (error) return res.status(500).json(error);
          
                return res.status(200).json({ result });
            });
        } else {
            return res.status(404).json("User not found");
        }
        
    } catch (error) {
        res.status(500).json(error)
    }
})



module.exports = router;