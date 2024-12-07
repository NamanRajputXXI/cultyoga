const mongoose = require("mongoose");

const BlogSchema = require("../schemas/BlogSchema");

const Blog = mongoose.model("Blog", BlogSchema);

module.exports = Blog;
