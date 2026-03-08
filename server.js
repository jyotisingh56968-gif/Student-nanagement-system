const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let students = [
  { id: 101, name: "Rahul Sharma", course: "BSc CS" },
  { id: 102, name: "Priya Singh", course: "BCA" }
];

// Home route
app.get("/", (req, res) => {
  res.send("Student Management System API is running 🚀");
});

// Test route
app.get("/test", (req, res) => {
  res.send("Test route working ✅");
});

// Students API
app.get("/students", (req, res) => {
  res.json(students);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});