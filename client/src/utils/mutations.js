import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($enteredText: String!, $enteredTitle: String!) {
    addPost(enteredText: $enteredText, enteredTitle: $enteredTitle) {
      _id
      enteredText
      enteredTitle
      createdAt
      username
      commentCount
      comments {
        _id
      }
    }
  }
`;