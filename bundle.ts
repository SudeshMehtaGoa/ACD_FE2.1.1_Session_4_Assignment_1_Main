var nsStudent;
(function (nsStudent) {
    function studentDetails(student) {
        return ("Name : " + student.name + " ( English : " + student.english + " , Maths : " + student.maths + " , Science : " + student.science + " )");
    }
    nsStudent.studentDetails = studentDetails;
})(nsStudent || (nsStudent = {}));
///<reference path="namespace.ts"/>
var objStudent = { name: "Sudesh", english: 75, maths: 87, science: 67 };
function studentDetails() {
    document.getElementById("lblMessage").innerHTML = nsStudent.studentDetails(objStudent);
}
