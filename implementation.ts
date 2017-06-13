///<reference path="namespace.ts"/>
let objStudent: nsStudent.IStudent = { name: "Sudesh", english: 75, maths: 87, science: 67 };

function studentDetails() {
    (<HTMLInputElement>document.getElementById("lblMessage")).innerHTML = nsStudent.studentDetails(objStudent);
}


