const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
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
            minLength: 4,
            maxLength: 40
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionSchema]
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
