const express = require("express");
const connectToMongo = require("./db");

const app = express();

connectToMongo();
const dotenv = require("dotenv");
dotenv.config();

const PORT = 5000 || process.env.PORT ;

app.use(express.json());

// app.use("/", (req, res) => {
//   res.send("Hello World");
// });

//Rotes
// app.use("/api/auth", require("./routes/auth"));
// app.use("/api/notes", require("./routes/notes"));
app.use("/api/projects", require("./routes/projects"));

app.listen(PORT, () => {
  console.log("Connected to port 5000");
});
