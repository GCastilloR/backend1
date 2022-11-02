const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const tweetSchema = new Schema(
    {
      id:{
        type: Number,
        required: true,
        unique:true
      },
      username: {
        type: String,
        required: true,
      },
      tweet: {
        type: String,
        required: true,
        maxlength: 280,
      },
      retweets: [
        {
          username: {
            type: String,
          },
          date: Date,
        },
      ],
      likes: {
        type: [String],
      },
    },
    {
      timestamps: true,
      collection: "tweets",
    }
  );
  
  module.exports = mongoose.model("Tweet", tweetSchema);