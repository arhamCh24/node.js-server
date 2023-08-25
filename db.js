const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

// const mongoURI = process.env.MONGODB_API
const mongoURI = 'mongodb://127.0.0.1:27017/portfolio'
const connectToMongo = () => {

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(mongoURI);

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
};

module.exports = connectToMongo;

