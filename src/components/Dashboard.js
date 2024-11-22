import React from 'react';
import styled from 'styled-components';

const StatsBox = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Stat = styled.div`
  text-align: center;
`;

function Dashboard({ students }) {
  const totalStudents = students.length;
  const currentStudents = students.filter((s) => s.graduationYear >= new Date().getFullYear()).length;
  const graduates = totalStudents - currentStudents;

  return (
    <StatsBox>
      <Stat>
        <h2>{totalStudents}</h2>
        <p>Total Students</p>
      </Stat>
      <Stat>
        <h2>{currentStudents}</h2>
        <p>Current Students</p>
      </Stat>
      <Stat>
        <h2>{graduates}</h2>
        <p>Graduates</p>
      </Stat>
    </StatsBox>
  );
}

export default Dashboard;
