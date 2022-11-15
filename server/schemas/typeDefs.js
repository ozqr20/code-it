const { gql } = require('apollo-server-express');

    // type File {
    //     filename: String
    //     mimetype: String
    //     enconding: String
    // }

const typeDefs = gql `
    type User {
        _id: ID
        username: String
        email: String
        posts: [Post]
    }

    type Post {
        _id: ID
        enteredText: String
        enteredTitle: String
       
        createdAt: String
        username: String
        commentCount: Int
       comments: [Comment]
    }

    type Comment {
        _id: ID
        commentBody: String
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
        post(_id: ID!): Post
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addComment(postId: ID!, commentBody: String!): Post
        addUser(username: String!, email: String!, password: String!): Auth
        addPost(enteredText: String!, enteredTitle: String!): Post
        removePost(postId: ID!): User
    }
`;

module.exports = typeDefs;