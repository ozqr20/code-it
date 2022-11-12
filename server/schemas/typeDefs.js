const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type User {
        _id: ID
        username: String
        email: String
        posts: [posts]
    }

    type Post {
        _id: ID
        enteredText
        enteredTitle
        createdAt: String
        username: String
        commentCount: Int
        reactions: [Reaction]
    }

    type Reaction {
        _id: ID
        reactionBody
        createdAt: String
        username: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        posts(username: String): [Post]
        post(_id: ID!): Thought
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addPost(enteredText: String!,enteredTitle: String!): Post
    }
`;

module.exports = typeDefs;