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
        reactposts: [ReactPost]
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

    type ReactPost {
        _id: ID
        enteredText: String
        enteredTitle: String
        createdAt: String
        username: String
        reactcommentCount: Int
       reactcomments: [Comment]
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
        reactposts(username: String!): [ReactPost]
        post(_id: ID!): Post
        reactpost(_id: ID!): ReactPost
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addComment(postId: ID!, commentBody: String!): Post
        addReactComment(reactpostId: ID!, reactcommentBody: String!): ReactPost
        addUser(username: String!, email: String!, password: String!): Auth
        addPost(enteredText: String!, enteredTitle: String!): Post
        addReactPost(enteredText: String!, enteredTitle: String!): ReactPost
        removePost(postId: ID!): User
    }
`;

module.exports = typeDefs;