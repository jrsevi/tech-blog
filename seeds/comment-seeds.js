const { Comment } = require('../models');

const commentData = [
  {
    user_id: 1,
    post_id: 2,
    comment_text: "This is a seeded comment!"
  },
  {
    user_id: 2,
    post_id: 1,
    comment_text: "This is also a seeded comment!"
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

// Export the seedComments function
module.exports = seedComments;