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

// seeds
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


const productFilePath = path.join(__dirname, "blogophile.blogs.json");
const rawProductData = fs.readFileSync(productFilePath, "utf-8");
const productsData = preprocessData(JSON.parse(rawProductData));
 



const seedDatabase = async () => {
  try {
    
    await Blogs.deleteMany({});   
    await Blogs.insertMany(productsData);  
    console.log("Product database seeding successful");

    mongoose.connection.close();
  } catch (err) {
    console.error("Database seeding error:", err);
    mongoose.connection.close();
  }
};

seedDatabase();