const {gql} = require('apollo-server-express');

module.exports = gql`

scalar Date

type Question {
    id: ID!
    content: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    favoriteCount: Int!

}

type Query {
    questions: [Question!]!
    question(id: ID!): Question!

}

type Mutation {
    newQuestion(content: String!): Question!
    updateQuestion(id: ID!, content: String!): Question!
    deleteQuestion(id: ID!): Boolean
    toggleFavorite(id: ID!): Question!
}

`;