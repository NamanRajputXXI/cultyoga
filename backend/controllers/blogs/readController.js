const Blog = require("../../models/BlogModel")

// Get All Blogs;
const getAllBlogs = async (req, res)=>{
    try{
        const blogs= await Blog.find();
        res.json(blogs)
    }
    catch(error){
        console.error("Error Fetching Disease", error)
        res.status(500).json({message:error.message})
    }
}

// Get Blogs by its Id
const getBlogById = async (req, res)=>{
    const {id}= req.params;
    try{
        const blogId = await Blog.findById(id);
        if(!blogId){
            res.status(404).json({
                message:"Blog not found"
            })
          
        }
        res.send(blogId)
    }catch(error){
        console.log("Error Fetching Disease", error);
        res.status(500).json({message:error.message})
        
    }
}
module.exports = {getAllBlogs, getBlogById}