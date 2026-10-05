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
// const student = students[0];

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
let topStudent = students[0];
students.forEach(function(student){
    const average = calculateAverage(student.grades);
    const topAverage = calculateAverage(topStudent.grades);

    if(average > topAverage){
        topStudent = student;
    }
})
console.log(topStudent)


// Add Student.
function addStudent(name, grades){
  const student = {
  name: name,
  grades: grades
  };

  students.push(student);
  console.log(`Student ${name} added succesfully!`, student);
  return students;
}


// addStudent("Alice", [80, 90, 85]);

// addGrade();
function addGrade(name, grade){
    const student =  findStudent(name);
    if(student){
        student.grades.push(grade)
    }
    return students;
    }
    

    // FInd Student.
    
function findStudent(name){
    return students.find(student => student.name === name)
}
console.log(findStudent("Mahad"))

    // Generate the final report.

    function generateReport(){
   let report = "===== STUDENT REPORT =====\n\n";
     students.forEach(function(student){
        const average = calculateAverage(student.grades);
        const status = getStudentStatus(average);
        
        report += `${student.name} - Average: ${average.toFixed(2)} - ${status}\n`;
     })
      let topStudent = students[0];

    students.forEach(function(student) {
        const average = calculateAverage(student.grades);
        const topAverage = calculateAverage(topStudent.grades);

        if (average > topAverage) {
            topStudent = student;
        }
    });
    

    const topAverage = calculateAverage(topStudent.grades);

    report += `\nTop Student: ${topStudent.name}\n`;
    report += `Top Average: ${topAverage.toFixed(2)}\n`;
     return report;
    }

    console.log(generateReport())
