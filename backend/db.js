const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://TechZee:TechZee@cluster0.ybwrrss.mongodb.net/techzee?retryWrites=true&w=majority";

const mongoDB = async () => {
  await mongoose.connect(mongoURI, { useNewUrlParser: true })
    .then(async () => {
      console.log("connected to the database");})
.catch((e) => {
      console.log("---------------failed", e);
    });
};

module.exports = mongoDB;
