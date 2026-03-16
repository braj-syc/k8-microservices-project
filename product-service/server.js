const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json([
    { id: 101, product: "Laptop" },
    { id: 102, product: "Phone" }
  ]);
});

app.listen(3000, () => {
  console.log("Product service running on port 3000");
});
