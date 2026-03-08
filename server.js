const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

// students data
let students = [
  { id: 101, name: "Rahul Sharma", course: "BSc CS" },
  { id: 102, name: "Priya Singh", course: "BCA" }
];

// API route
app.get("/api/students", (req, res) => {
  res.json(students);
});

// serve frontend files
app.use(express.static(path.join(__dirname)));

// home route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});