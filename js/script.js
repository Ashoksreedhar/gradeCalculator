
function scoreCalculator() {

    const scor = prompt("Enter your 0 to 100")
    let subject1 = Number(prompt("Enter marks for subject-1:"));
    let subject2 = Number(prompt("Enter marks for subject-2:"));
    let subject3 = Number(prompt("Enter marks for subject-3:"));
    let subject4 = Number(prompt("Enter marks for subject-4:"));
    let subject5 = Number(prompt("Enter marks for subject-5:"));

    const totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;

    const numberOfSubject = 5;
    const averageMarks = totalMarks / 5;

    let grade;
    if (averageMarks >= 90 && averageMarks <= 100) {
        grade = "A+"
    } else if (averageMarks >= 80) {
        grade = "A"
    } else if (averageMarks >= 70) {
        grade = "B"
    } else if (averageMarks >= 60) {
        grade = "C"
    } else if (averageMarks >= 50) {
        grade = "D"
    } else {
        grade = "F"
    }

    alert("Marks " + "\n" +
        "Total Marks: " + totalMarks + "\n" +
        "Average Marks: " + averageMarks +
        "\n" + "Grade: " + grade);
}

scoreCalculator()