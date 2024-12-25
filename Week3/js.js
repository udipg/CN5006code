//defining the function EmployeeInfo
function EmployeeInfo(name,Salary)
    {
        console.log("Wellcome "+ name + " Your monthly Salary is "+ Salary)
    }
    console.log("This is my first program")

var EmpName="Sujit"
var EmpSalary= 1200
// calling the function 
EmployeeInfo("Sujit",1200)

//Second Exercise

const EmpSkills= (skills)=> {
    console.log("Expert in " + skills)
}
EmpSkills("Java")
EmpSkills("Python")
EmpSkills("JavaScript")

const student = require('./StudentInfo');
const person = require('./Person')

console.log("Student Name: " +student.getName() )
console.log(student.Location() )
console.log(student.dob )
console.log(student.Studentgrade())
console.log("grade is " +student.Studentgrade(80) )

Person= new person("Astup","25", "dhojuastup@gmail.com")
console.log("using Person Module", Person.getPersonInfo())
console.log("program ended")

