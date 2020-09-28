// model schema for database - mongoose
const mongoose = require('mongoose');
const TutorialSchema = mongoose.Schema({
    title: String,
    description: String,
    published: Boolean
}, {
    timestamps: true
});

module.exports = mongoose.model('Tutorial', TutorialSchema);