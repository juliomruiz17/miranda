const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require('body-parser')

const app = express();

// Settings
app.set("port", process.env.PORT || 4000);

app.use(bodyParser.urlencoded({ extended: false}));

// Middlewares
//const corsOptions = {origin: "http://localhost:4200"}
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Routes

app.use("/api/product", require("./routes/product.routes"));

module.exports = app;