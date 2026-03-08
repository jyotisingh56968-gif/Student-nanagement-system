const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

// memory database
let students = [
  { id: 101, name: "Rahul Sharma", course: "BSc CS", year: "1", email: "rahul@test.com" },
  { id: 102, name: "Priya Singh", course: "BCA", year: "2", email: "priya@test.com" }
];

// GET students
app.get("/api/students", (req, res) => {
  res.json(students);
});

// ADD student
app.post("/api/students", (req, res) => {

  const student = req.body;

  students.push(student);

  res.json({
    message: "Student added successfully",
    data: student
  });

});

// serve frontend
app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});