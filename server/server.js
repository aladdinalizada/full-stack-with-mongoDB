const express = require("express");
const app = express();
const port = 3000;
// Body - Parser
const bodyParser = require("body-parser");
// Cors
const cors = require("cors");
// Dotenv
const dotenv = require("dotenv");
dotenv.config();
// mongose
const mongoose = require("mongoose");
// Mongoose Schema
const { Schema } = mongoose;

// Create Schema
const userSchema = new Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
  },
  { timestamps: true }
);
// Create Model
const Users = mongoose.model("Users", userSchema);
//

app.use(cors());
app.use(bodyParser.json());
// GET /users
app.get("/users", (req, res) => {
  Users.find({}, (err, users) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(users);
    }
  });
});
//
// POST /users
app.post("/users", (req, res) => {
  const user = req.body;
  Users.create(user, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});
//
// DELETE /users/:id
app.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  Users.findByIdAndDelete(id, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});
//

const PORT = process.env.PORT || 3000;
const URL = process.env.DB_URL.replace("<password>", process.env.DB_PASSWORD);

mongoose.connect(URL, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to DB");
    app.listen(PORT, () =>
      console.log(`Example app listening on port ${PORT}!`)
    );
  }
});
