

import connectDb from "../../middleware/connectDb";
import Blogs from '../../models/Blogs';

const handler = async (req, res) => {
  await connectDb();  
    try {
        
      const deletedBlog = await Blogs.findOneAndDelete({title:"t1"});

      if (!deletedBlog) {
        return res.status(404).json({ message: 'Blog not found' });
      }

      res.status(200).json({ message: 'Blog deleted successfully', deletedBlog });
    } catch (error) {
      console.error('Error deleting blog:', error);
      res.status(500).json({ message: 'Server error' });
    }

};

export default handler;
