import connectDb from "../../middleware/connectDb";
import Blogs from "../../models/Blogs"; 
import mongoose from "mongoose";

const handler = async (req, res) => {
    const {title,category,descr,image}=req.body;

    try {
    

        const myBlog = new Blogs({
            title: title,
            category: category,
            descr: descr,
            slug: title,
            img: image,
        });

        await myBlog.save();

        res.status(200).json({ message: "Blogs added successfully" });
    } catch (error) {
        console.error("Error adding course:", error);
        res.status(500).json({ error: "Server error" }); // Generic server error response
    }
};

export default connectDb(handler);
