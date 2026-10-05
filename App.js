const students = [
    {
        name: "Mahad",
        grades: [100, 75, 90]
    },
    {
        name: "Ahmed",
        grades: [65, 70, 60]
    },
    {
        name: "Yasmin",
        grades: [95, 88, 92]
    }
];

// calculateAverage();\
function calculateAverage(grades){
    let average = grades.reduce((sum, num)=> sum + num, 0)/ grades.length;
    return average;
}


// console.log(calculateAverage([95, 88, 92]))

// Determine Pass/Fail;
function getStudentStatus(average){
let pass = ""
if(average>= 70){
    pass += "Pass";
}else if(average < 70){
    pass += "Fail"
}
return pass;
}

// console.log(getStudentStatus(51.67))

// Work with one Students.
const student = students[0];

// console.log(student.name);
// console.log(student.grades);
// console.log(calculateAverage(student.grades));
// console.log(getStudentStatus(calculateAverage(student.grades)));

// Process All Students.
students.forEach(function(student){
    const average = calculateAverage(student.grades);
    const status = getStudentStatus(average);
    console.log(`${student.name} - Average: ${average.toFixed(2)} | Status: ${status}`);
})

// Find the top student.
const topPerformer = students.find(students => students.grades[0]> 85)
// console.log(topPerformer)

// Add Student.
function addStudent(name, grades){

}