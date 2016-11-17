var grades = [100, 50, 75, 90, 40];
var totalGrade = 0;

grades.forEach(function (grade) {
    totalGrade = totalGrade + grade;
    console.log('Current Total grade is', totalGrade);
});

var avarege = totalGrade / grades.length;
console.log('Average is', avarege);
