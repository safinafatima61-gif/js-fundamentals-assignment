const students = [
  { name: 'Asad', scores: [85, 90, 78, 92], present: true },
  { name: 'Sara', scores: [70, 65, '80', 75], present: true },
  { name: 'Ali', scores: [55, 60, 50, null], present: false },
  { name: 'Fatima', scores: [95, 98, 100, 92], present: true },
  { name: 'Umar', scores: [], present: true },
];


// 1. getAverage
function getAverage(scores) {
  let sum = 0;
  let count = 0;

  for (const s of scores) {
    const num = Number(s);
    if (!isNaN(num)) {
      sum += num;
      count++;
    }
  }

  if (count === 0) return 0;

  return Number((sum / count).toFixed(1));
}


// 2. getGrade
function getGrade(avg) {
  if (avg >= 90) return "A+";
  if (avg >= 80) return "A";
  if (avg >= 70) return "B";
  if (avg >= 60) return "C";
  if (avg >= 50) return "D";
  return "F";
}


// 3. generateReport (NO MUTATION)
function generateReport(students) {
  return students.map(student => {
    const avg = getAverage(student.scores);
    const grade = getGrade(avg);

    return {
      name: student.name,
      average: avg,
      grade: grade,
      status: student.present ? "present" : "absent",
      passed: student.present && avg >= 60
    };
  });
}


// 4. getSummary
function getSummary(report) {
  let total = report.length;
  let passed = 0;
  let failed = 0;
  let topStudent = "";
  let highest = -Infinity;
  let sum = 0;

  for (const r of report) {
    sum += r.average;

    if (r.passed) passed++;
    else failed++;

    if (r.average > highest) {
      highest = r.average;
      topStudent = r.name;
    }
  }

  return {
    total,
    passed,
    failed,
    topStudent,
    classAverage: Number((sum / report.length).toFixed(1))
  };
}


// ---------------- TESTING ----------------

console.log("===== BEFORE REPORT (ORIGINAL DATA) =====");
console.log(JSON.stringify(students, null, 2));

const report = generateReport(students);

console.log("===== GENERATED REPORT =====");
console.log(report);

console.log("===== SUMMARY =====");
console.log(getSummary(report));

console.log("===== AFTER REPORT (CHECK IMMUTABILITY) =====");
console.log(JSON.stringify(students, null, 2));