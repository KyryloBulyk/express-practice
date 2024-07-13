const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const app = express();

app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://kyrylobulyk:12345qwert@kyrylobulyk.m7jdr88.mongodb.net/Node-API?retryWrites=true&w=majority&appName=kyrylobulyk"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });

app.get("/", (req, res) => {
  res.send("Hello from NodeJs API Hello");
});

app.post("/api/product", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
