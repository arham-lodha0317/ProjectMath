const { ApolloServer } = require("apollo-server");
const gql = require("graphql-tag");
const mongoose = require("mongoose");

// const Problem = require(`./models/Problem`);
const User = require('./models/User')
const { MONGODB } = require("./config");

const typeDefs = gql`
    type User {
        id: ID!
        username: String!
        password: String!
        email: String!
        createdAt: String!
    }
    
    type Query{
        getUsers: [User]
    }
`;

const resolvers = {
  Query: {
    async getUsers() {
        try{
            const users = await User.find();
            return users;
        }
        catch(err){
            throw new Error(err)
        }
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected");
    return server.listen({ port: 5000 });
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  });
