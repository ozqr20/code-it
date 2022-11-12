const userSeeds = require("./userSeed.json");
const postSeeds = require('./postSeed.json');
const db = require('../config/connection');
const { Post, User } = require('../models');

db.once('open', async () => {
    try{
        await User.create(userSeeds);

        const { _id, postUser } = await User.create(postSeeds);
        const user = await User.findOneAndUpdate(
            { username: postUser },
            { 
                $addToSet: {
                posts: _id,
                },
            }
        );
    } catch (err) {
        console.log(err + "seeds not working");
    }

    console.log('seeds working');
})