import { gql } from "@apollo/client"

export const QUERY_POSTS = gql`
    query posts($username: String) {
        posts(username: $username) {
            _id
            enteredText
            enteredTitle
            
            createdAt
            username
            commentCount
            comments {
                _id
                createdAt
                username
                commentBody
            }
        }
    }
`;

export const QUERY_REACT_POSTS = gql`
    query reactposts($username: String) {
        reactposts(username: $username) {
            _id
            enteredText
            enteredTitle
            createdAt
            username
            reactcommentCount
            reactcomments {
                _id
                createdAt
                username
                reactcommentBody
            }
        }
    }
`;

export const QUERY_POST = gql `
    query post($id: ID!) {
        post(_id: $id) {
            _id
            enteredText
            enteredTitle
            createdAt
            username
            commentCount
            comments {
                _id
                createdAt
                username
                commentBody
            }
        }
    }
`;

export const QUERY_REACT_POST = gql `
    query reactpost($id: ID!) {
        reactpost(_id: $id) {
            _id
            enteredText
            enteredTitle
            createdAt
            username
            reactcommentCount
            reactcomments {
                _id
                createdAt
                username
                reactcommentBody
            }
        }
    }
`;

export const QUERY_ME = gql`
    {
        me {
            _id
            username
            email
            posts {
                _id
                enteredText
                enteredTitle
                createdAt
                commentCount
                comments {
                    _id
                    createdAt
                    username
                    commentBody
                }
            }
            reactposts {
                _id
                enteredText
                enteredTitle
                createdAt
                reactcommentCount
                reactcomments {
                    _id
                    createdAt
                    username
                    reactcommentBody
                }
            }
        }
    }
`;

export const QUERY_USER = gql `
    query user($username: String!){
        user(username: $username){
            _id
            username
            email
            posts {
                _id
                enteredTitle
                enteredText
                createdAt
                commentCount
            }
            reactposts {
                _id
                enteredTitle
                enteredText
                createdAt
                reactcommentCount
            }
        }
    }
`;