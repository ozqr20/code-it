const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');
const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema(
    {
        enteredText: {
            type: String,
            required: true,
            minLength: 2,
            maxLength: 150
        },
        enteredTitle: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 40
        },
        // enteredSub: {
        //     type: String,
        //     required: false

        // },

        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        username: {
            type: String,
            required: true
        },
        comments: [commentSchema]
    },
    {
        toJSON: {
            getters: true
        }
    }
);

postSchema.virtual('reactionCount').get(function () {
    return this.reaction.length;
    
});

const Post = model('Post', postSchema);

module.exports = Post;
