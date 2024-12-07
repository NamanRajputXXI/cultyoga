const Blog= require("../../models/BlogModel")

const createBlog = async (req, res)=>{
    const blog = new Blog({
        title:req.body.title,
    createdBy:req.body.createdBy,
    category:req.body.category,
    blogText:req.body.blogText,
    images:req.body.images
    });
    try {
        const newBlog = await blog.save();
        res.status(201).json(newBlog);
    }catch(error){
        res.status(400).json({
            message:error.message
        })
    }
}

module.exports = {createBlog}