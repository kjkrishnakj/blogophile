import connectDb from "../../lib/connectDb";
import Blogs from "../../models/Blogs";

const handler = async (req, res) => {
  try {
    await connectDb();  
    const blogs = await Blogs.find();
    res.status(200).json(blogs);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).json({ message: "Error fetching blogs" });
  }
};

export default handler;
