import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import GlobalStyles from "./styles/GlobalStyles";
import initialStudents from "./data";

function App() {
  const [students, setStudents] = useState(initialStudents);
  const [filterYear, setFilterYear] = useState(null);

  const addStudent = (student) => {
    setStudents([...students, { ...student, id: students.length + 1 }]);
  };

  const filteredStudents = filterYear
    ? students.filter((student) => student.graduationYear === filterYear)
    : students;

  return (
    <>
      <GlobalStyles />
      <div style={{ padding: "20px" }}>
        <h1>School Database</h1>
        <Dashboard students={students} />
        <GroupedByClass students={students} />
        <StudentForm addStudent={addStudent} />
        <label>
          Filter by Graduation Year:
          <input
            type="number"
            value={filterYear || ""}
            onChange={(e) => setFilterYear(Number(e.target.value) || null)}
          />
        </label>
        <StudentList students={filteredStudents} />
      </div>
    </>
  );
}

export default App;
