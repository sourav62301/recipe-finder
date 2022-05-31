const express = require("express");
const userRoutes = require("./userRoutes");

const cors = require('cors')

require('dotenv').config();

const port  = process.env.PORT || 5000

const app = express();
require("./db");
app.use(cors);

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.get('/', (req, res)=>{
  res.json("Server Star.....");
})

app.use(userRoutes);


app.listen(port, () => {
  console.log("Server running at 5000");
});
