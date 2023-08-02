function average(grades) {
  const totalGrades = grades.reduce((sum, grade) => sum + grade, 0);
  const aver = totalGrades / grades.length;
  return aver;
}

function program() {
  const grades = [];
  const subjects = 3;

  for (let i = 1; i <= subjects; i++) {
    const input = prompt(`Enter the grade for subject ${i}:`);
    const grade = parseFloat(input);

    if (isNaN(grade)) {
      alert("Please enter a valid grade.");
      return;
    }

    grades.push(grade);
  }

  const averageGrade = average(grades);
  alert(`Average grade: ${averageGrade.toFixed(2)}`);
}

program();