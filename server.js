const express = require("express");
const app = express();
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
app.use(cors());

require("dotenv").config();
require("./utils/db");

const port = 3000;
app.use(express.json());
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(helmet());

app.use("/api",require("./routes/user"));



app.listen(port, () => console.log(`Example app listening on port ${port}!`));
