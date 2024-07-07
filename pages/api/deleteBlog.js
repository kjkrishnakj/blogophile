const express = require('express');
const router = express.Router();
const Blog = require('../../models/Blogs'); // Replace with your Blog model import

// DELETE route to delete a blog by ID
router.delete('/api/deleteBlog/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBlog = await Blog.findByIdAndDelete(id);
    if (deletedBlog) {
      res.status(200).json({ message: 'Blog deleted successfully' });
    } else {
      res.status(404).json({ message: 'Blog not found' });
    }
  } catch (error) {
    console.error('Error deleting blog:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
