const { Schema, model } = require('mongoose');
const reactcommentSchema = require('./ReactComment');
const dateFormat = require('../utils/dateFormat');

const reactpostSchema = new Schema(
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
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        username: {
            type: String,
            required: true
        },
        reactcomments: [reactcommentSchema]
    },
    {
        toJSON: {
            getters: true
        }
    }
);

// reactpostSchema.virtual('reactcommentCount').get(function () {
//     return this.reactcomment.length;
    
// });

const ReactPost = model('ReactPost', reactpostSchema);

module.exports = ReactPost;
