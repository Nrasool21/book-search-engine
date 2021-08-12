// gql mutations
import { gql } from "@apollo/client";

const LOGIN = gql`
  mutation login($loginInput: LoginInput!) {
    login(input: $loginInput) {
      token
      user {
        _id
        email
        username
      }
    }
  }
`;

const SIGNUP = gql`
  mutation addUser($signupInput: SignupInput!) {
    addUser(input: $signupInput) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

const SAVE_BOOK = gql`
  mutation saveBook($saveBookInput: SaveBookInput) {
    saveBook(input: $saveBookInput) {
      _id
      email
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;

const DELETE_BOOK = gql`
  mutation removeBook($removeBookBookId: ID!) {
    removeBook(bookId: $removeBookBookId) {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;

export { LOGIN, SIGNUP, SAVE_BOOK, DELETE_BOOK };
