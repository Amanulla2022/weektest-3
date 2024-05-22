const express = require("express");
const validateUser = require("./middleware/validateUser");
const errorHandler = require("./middleware/errorHandler");
const PORT = 5000;
const app = express();
app.use(express.json());

app.post("/register", validateUser, (req, res) => {
  res.status(200).json({
    success: true,
    message: "User registered successfully!",
  });
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
