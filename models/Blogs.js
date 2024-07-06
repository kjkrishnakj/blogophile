const mongoose = require('mongoose');

const BlogsSchema = new mongoose.Schema({
    author: { type: String,  },
    title: { type: String, required: true },
    category: { type: String, required: true },
    slug: { type: String},
    descr: { type: String, required: true },
    img: { type: String, required: true },
    tags: { type: String },
}, { timestamps: true });

mongoose.models = {};
export default mongoose.model("Blogs", BlogsSchema);
