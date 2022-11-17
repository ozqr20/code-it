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

// export const FILE_UPLOAD = gql`
//   mutation fileAdd($file: Upload!){
//     fileAdd(file: $file){
//       success
//     }
//   }
// `;

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

export const ADD_REACT_POST = gql`
  mutation addReactPost($enteredText: String!, $enteredTitle: String!) {
    addReactPost(enteredText: $enteredText, enteredTitle: $enteredTitle) {
      _id
      enteredText
      enteredTitle
      createdAt
      username
      reactcommentCount
      reactcomments {
        _id
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($postId: ID!, $commentBody: String!) {
    addComment(postId: $postId, commentBody: $commentBody) {
      _id
      commentCount
      comments {
        _id
        commentBody
        createdAt
        username
      }
    }
  }
`;

export const ADD_REACT_COMMENT = gql`
  mutation addReactComment($reactcommentId: ID!, $reactcommentBody: String!) {
    addReactComment(reactcommentId: $reactcommentId, reactcommentBody: $reactcommentBody) {
      _id
      reactcommentCount
      reactcomments {
        _id
        reactcommentBody
        createdAt
        username
      }
    }
  }
`;

export const REMOVE_POST = gql `
  mutation removePost($id: ID!){
    removePost(id: $id){
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