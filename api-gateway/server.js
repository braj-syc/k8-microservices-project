const express = require("express");
const axios = require("axios");
const app = express();

const USER_SERVICE = "http://user-service";
const PRODUCT_SERVICE = "http://product-service";

app.get("/users", async (req, res) => {
  const response = await axios.get(USER_SERVICE);
  res.json(response.data);
});

app.get("/products", async (req, res) => {
  const response = await axios.get(PRODUCT_SERVICE);
  res.json(response.data);
});

app.listen(3000, () => {
  console.log("API Gateway running on port 3000");
});
