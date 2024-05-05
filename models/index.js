// Import the User, Post, and Comment models
const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');

// Define the relationship between the User and Post models
User.hasMany(Post, {
    foreignKey: 'user_id' // The foreign key in the Post model is 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id', // The foreign key in the Post model is 'user_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id' // The foreign key in the Comment model is 'user_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id' // The foreign key in the Comment model is 'post_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id' // The foreign key in the Comment model is 'user_id'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id' // The foreign key in the Comment model is 'post_id'
});

module.exports = {User, Post, Comment};