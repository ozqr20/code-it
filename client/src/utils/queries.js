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
            reactions {
                _id
                createdAt
                username
                reactionBody
            }
        }
    }
`;

export const QUERY_REPLY = gql `
    query reply($id: ID!) {
        reply(_id: $id) {
            _id
            enteredText
            enteredTitle
            createdAt
            username
            commentCount
            reactions {
                _id
                createdAt
                username
                reactionBody
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
                reactions {
                    _id
                    createdAt
                    username
                    reactionBody
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
        }
    }
`;