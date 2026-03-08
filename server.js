const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

// student data
let students = [
  { id: 101, name: "Rahul Sharma", course: "BSc CS" },
  { id: 102, name: "Priya Singh", course: "BCA" }
];

// API routes
app.get("/test", (req, res) => {
  res.send("Test route working ✅");
});

app.get("/students", (req, res) => {
  res.json(students);
});

// homepage
app.get("/", (req, res) => {
  res.send("Student Management System API is running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});