const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
    title:String,
    createdBy:String,
    category:String,
    blogText:[String],
    images:[String]
},
{ versionKey: false } // This line excludes the _v field
)

module.exports= BlogSchema;