const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const Blogs = require("./models/Blogs.js");
require('dotenv').config();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database connection successful");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

// Function to preprocess the JSON data
const preprocessData = (data) => {
  return data.map((item) => {
    if (item._id && item._id.$oid) {
      item._id = item._id.$oid;
    }
    if (item.createdAt && item.createdAt.$date) {
      item.createdAt = new Date(item.createdAt.$date);
    }
    if (item.updatedAt && item.updatedAt.$date) {
      item.updatedAt = new Date(item.updatedAt.$date);
    }
    return item;
  });
};

const productFilePath = path.join(__dirname, "blogophi  le.blogs.json");
const rawProductData = fs.readFileSync(productFilePath, "utf-8");
const productsData = preprocessData(JSON.parse(rawProductData));

const seedDatabase = async () => {
  try {
    // Remove blogs with title "t1" before seeding
    const deletedBlog = await Blogs.findOneAndDelete({ title: "t1" });
    if (deletedBlog) {
      console.log("Deleted blog:", deletedBlog);
    } else {
      console.log("Blog with title 't1' not found.");
    }
    // Insert new data
    await Blogs.insertMany(productsData);
    console.log("Product database seeding successful");
  } catch (err) {
    console.error("Database seeding error:", err);
  } finally {
    mongoose.connection.close();
  }
};

seedDatabase();
