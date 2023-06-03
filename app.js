const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config(); 

app.use(express.json());

app.use(cors());

app.use(require("./src/routes/route"));

const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || "development";

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
  console.log("Press Ctrl + C to quit.");
  console.log(`ENV on: ${env}`);
});