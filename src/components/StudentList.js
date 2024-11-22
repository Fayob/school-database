import React from 'react';

function StudentList({ students }) {
  const classes = [...new Set(students.map((s) => s.class))];

  return (
    <div>
      <h2>Students</h2>
      {classes.map((cls) => (
        <div key={cls}>
          <h3>Class: {cls}</h3>
          <ul>
            {students
              .filter((s) => s.class === cls)
              .map((student) => (
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

export default StudentList;
