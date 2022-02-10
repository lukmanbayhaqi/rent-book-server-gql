const { gql } = require("apollo-server");
const { login, register } = require("../controllers/user");
const { findAllBook } = require("../controllers/book");
const { rentBook, returnBook, findAllRent } = require("../controllers/rent");

const typeDefs = gql`
  type Users {
    id: ID
    email: String
    message: String
    token: String
    status: Int!
  }

  type Books {
    id: ID
    title: String
    isbn: String
    author: String
    image_url: String
    status: Int
    message: String
  }

  type Rents {
    id: ID
    UserId: Int
    BookId: Int
    returnDate: String
    status: Int
    message: String
    Book: Books
  }

  type Query {
    findAllBook: [Books]
    findAllRent: [Rents]
  }

  type Mutation {
    login(email: String, password: String): Users
    register(name: String, email: String, password: String): Users
    rentBook(bookId: Int): Rents
    returnBook(id: ID, returnDate: String): Rents
  }
`;

const resolvers = {
  Query: {
    findAllBook,
    findAllRent,
  },
  Mutation: {
    login,
    register,
    rentBook,
    returnBook,
  },
};

module.exports = {
  typeDefs,
  resolvers,
};
