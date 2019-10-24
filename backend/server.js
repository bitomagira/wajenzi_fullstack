const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors());
const bodyParser = require("body-parser");
const router = express.Router();
app.use(bodyParser.json());

app.use(bodyParser.json());

const users = require("./users");
app.use("/user", users);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
