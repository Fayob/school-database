import React from "react";

function GroupedByClass({ students }) {
  const groupedStudents = students.reduce((acc, student) => {
    const { class: studentClass } = student;
    if (!acc[studentClass]) {
      acc[studentClass] = [];
    }
    acc[studentClass].push(student);
    return acc;
  }, {});

  return (
    <div>
      <h2>Students Grouped by Class</h2>
      {Object.keys(groupedStudents).map((studentClass) => (
        <div key={studentClass} style={{ marginBottom: "20px" }}>
          <h3>Class: {studentClass}</h3>
          <ul>
            {groupedStudents[studentClass].map((student) => (
              <li key={student.id}>
                {student.name} (Graduation Year: {student.graduationYear})
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default GroupedByClass;
