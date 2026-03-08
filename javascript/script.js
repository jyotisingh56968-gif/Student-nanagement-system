let students = []
let teachers = []

function showSection(section){

document.querySelectorAll(".section").forEach(sec=>{
sec.style.display="none"
})

document.getElementById(section).style.display="block"

}

function addStudent(){

const id=document.getElementById("sid").value
const name=document.getElementById("sname").value
const course=document.getElementById("scourse").value

students.push({id,name,course})

displayStudents()

}

function displayStudents(){

const table=document.getElementById("studentTable")

table.innerHTML=""

students.forEach((s,index)=>{

table.innerHTML+=`
<tr>
<td>${s.id}</td>
<td>${s.name}</td>
<td>${s.course}</td>
<td><button onclick="deleteStudent(${index})">Delete</button></td>
</tr>
`

})

document.getElementById("studentCount").innerText=students.length

}

function deleteStudent(i){

students.splice(i,1)

displayStudents()

}

function addTeacher(){

const id=document.getElementById("tid").value
const name=document.getElementById("tname").value

teachers.push({id,name})

displayTeachers()

}

function displayTeachers(){

const list=document.getElementById("teacherList")

list.innerHTML=""

teachers.forEach(t=>{

list.innerHTML+=`<li>${t.id} - ${t.name}</li>`

})

document.getElementById("teacherCount").innerText=teachers.length

}

function addNotice(){

const text=document.getElementById("noticeText").value

const list=document.getElementById("noticeList")

list.innerHTML+=`<li>${text}</li>`

}


function loginAdmin(){

let id=document.getElementById("adminId").value
let pass=document.getElementById("adminPass").value

if(id==="admin" && pass==="admin123"){

alert("Login Successful")

document.getElementById("adminPanel").style.display="block"

}else{

alert("Invalid Admin Login")

}

}

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
const updateCount = () => {
const target = +counter.getAttribute('data-target');
const count = +counter.innerText;

const speed = 50;
const increment = target / speed;

if(count < target){
counter.innerText = Math.ceil(count + increment);
setTimeout(updateCount,40);
}else{
counter.innerText = target;
}
};

updateCount();
});

function searchStudent() {

let input = document.getElementById("searchInput").value.toUpperCase();

let table = document.querySelector("table");

let tr = table.getElementsByTagName("tr");

for (let i = 1; i < tr.length; i++) {

let td = tr[i].getElementsByTagName("td")[0];

if (td) {

let txtValue = td.textContent || td.innerText;

if (txtValue.toUpperCase().indexOf(input) > -1) {

tr[i].style.display = "";

} else {

tr[i].style.display = "none";

}

}

}

}


function editStudent(roll){
alert("Edit feature for Roll No: " + roll);
}



function addStudent(){

let id = document.getElementById("studentId").value
let name = document.getElementById("studentName").value
let course = document.getElementById("studentCourse").value
let year = document.getElementById("studentYear").value
let email = document.getElementById("studentEmail").value

fetch("/api/students")
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
id:id,
name:name,
course:course,
year:year,
email:email
})
})
.then(res => res.json())
.then(data => {

alert("Student saved successfully")

loadStudents()   

})

}

function updateStudentCount(){

let table=document.getElementById("studentTable");

let total=table.rows.length-1;

document.getElementById("totalStudents").innerText=total;

}

updateStudentCount();

function editStudent(button){

let row = button.parentNode.parentNode;

let name = row.cells[1];
let course = row.cells[2];
let year = row.cells[3];
let email = row.cells[4];

let newName = prompt("Edit Name:", name.innerText);
let newCourse = prompt("Edit Course:", course.innerText);
let newYear = prompt("Edit Year:", year.innerText);
let newEmail = prompt("Edit Email:", email.innerText);

if(newName) name.innerText = newName;
if(newCourse) course.innerText = newCourse;
if(newYear) year.innerText = newYear;
if(newEmail) email.innerText = newEmail;

}


function loadStudents(){

fetch("/api/students")
.then(res => res.json())
.then(data => {

let table = document.getElementById("studentTable")

table.innerHTML = ""

data.forEach(student => {

let row = `
<tr>
<td>${student.id}</td>
<td>${student.name}</td>
<td>${student.course}</td>
<td>${student.year || ""}</td>
<td>${student.email || ""}</td>
<td><button onclick="editStudent(this)">Edit</button></td>
</tr>
`

table.innerHTML += row

})

})


}

loadStudents()