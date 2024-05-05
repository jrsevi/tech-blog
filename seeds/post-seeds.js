// Import the Post model from the models directory
const { Post } = require('../models');

// Define an array of post data
const postData = [
  {
    // The first post has the title "New Programming Language Released!", content about a new programming language called SuperCode, and is associated with the user with ID 6
    title: "Seeded Posts?",
    post_content: "Reading this is a waste of time! This post was created by the developer who seeded the database. It works as a placeholder to ensure this function is working!",
    user_id: 1,
    post_id: 1
  },
  {
    // The second post has the title "AI Technology Advancements", content about recent advancements in AI technology, and is associated with the user with ID 7
    title: "This is a Seeded Post!",
    post_content: "This post was written by the developer who seeded the database. It works as a placeholder to ensure this function is working!",
    user_id: 2,
    post_id: 2
  },
  // More posts can be added as needed
];

// Define an asynchronous function that seeds the Post table with the post data
const seedPosts = () => Post.bulkCreate(postData);

// Export the seedPosts function
module.exports = seedPosts;