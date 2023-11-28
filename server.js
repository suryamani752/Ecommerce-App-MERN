const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDb = require("./config/db");
const cors = require("cors");

//configure env
dotenv.config();

//connect to db
connectDb();

// rest object
const app = express();

//middleware
app.use(cors())
app.use(express.json());
app.use(morgan("dev"));

//rest api
// app.get("/", (req, res) => {
//   res.send({
//     message: "welcome",
//   });
// });
app.use("/api/v1/auth", require("./routes/authRoutes.js"));

//PORT
const PORT = process.env.PORT || 7520;

//app listen
app.listen(PORT, () => {
  console.log(
    `Server listening on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});
