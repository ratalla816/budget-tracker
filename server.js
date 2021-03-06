// !!! Starter code is good - Only update Mongoose connect !!! //

const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = process.env.PORT || 3001;
// const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/budget-tracker";


const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/budget-tracker";
  mongoose.connect(MONGODB_URI, {  
  useFindAndModify: false,
  useNewUrlParser: true,
  // useUnifiedTopology: true
});

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});