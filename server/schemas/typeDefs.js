const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Admin {
    _id: Id!
    username: String!
    email: String!
    title: String
    savedWatch: [Watch]
  }
  type Item {
    _id :Id!
    title: String!
    description: String!
    images: String!
    price: Float!
    category: category
    saveddWatch: [Watch]
  }
  type Auth {
    token: ID!
    user: Admin
  }
  type Query {
    me: Admin
  }

  type Category {
    _id: ID
    name: String
  }

  type Order {
    _id: ID
    purchaseDate: String
    items: [Item]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    items(category: ID, name: String): [item]
    item(_id: ID!): item
    user: User
    order(_id: ID!): Order
    checkout(items: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(items: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateItem(_id: ID!, quantity: Int!): Item
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
