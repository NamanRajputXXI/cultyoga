const express = require("express")
const router = express.Router()
const {
    createBlog
} = require("../../controllers/blogs/createController")
const {
    getAllBlogs, getBlogById
} = require("../../controllers/blogs/readController")

// Get routes
router.get("/blogs", getAllBlogs)
router.get("/blog/:id", getBlogById)

// Post routes
router.post("/blog", createBlog);

module.exports = router;
