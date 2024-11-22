import React, { useState } from 'react';

function StudentForm({ addStudent }) {
  const [name, setName] = useState('');
  const [studentClass, setStudentClass] = useState('');
  const [graduationYear, setGraduationYear] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent({ name, class: studentClass, graduationYear: Number(graduationYear) });
    setName('');
    setStudentClass('');
    setGraduationYear('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <h2>Add Student</h2>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Class"
          value={studentClass}
          onChange={(e) => setStudentClass(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="Graduation Year"
          value={graduationYear}
          onChange={(e) => setGraduationYear(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Student</button>
    </form>
  );
}

export default StudentForm;
