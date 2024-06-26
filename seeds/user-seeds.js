// Import the User model from the models directory
const { User } = require('../models');

// Define an array of user data
const userData = [
  {
    // The first user has the username "john_doe", twitter handle "johnd", github handle "johnd", email "john_doe@gmail.com", and password "p@ssword7"
    username: "dev_test",
    twitter: "devTweeter",
    github: "devGithub",
    email: "devTest@gmail.com",
    password: "password1234"
  },
  {
    // The second user has the username "jane_doe", twitter handle "janed", github handle "janed", email "jane_doe@gmail.com", and password "p@ssword8"
    username: "test_dev",
    twitter: "fakeDevTweeter",
    github: "fakeDevGithub",
    email: "fakeDev@gmail.com",
    password: "password1234"
  },
  // More users can be added as needed
];

// Define an asynchronous function that seeds the User table with the user data
const seedUsers = () => User.bulkCreate(userData);

// Export the seedUsers function
module.exports = seedUsers;