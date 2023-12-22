require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const destinationRoutes = require('./routes/routes');

const PORT = process.env.PORT || 3000;
const dbURI = process.env.DB_URI;

app.use(bodyParser.json());
bodyParser.json();

app.use('/destinations',destinationRoutes);
app.get("/",(req,res) =>{
  res.send("Welcome to Assignment-14- Travelite APIs")
})
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running for Zomato-Backend on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });


