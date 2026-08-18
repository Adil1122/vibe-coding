'use client';

import { useEffect, useState } from 'react';

interface Employee {
  id: number;
  name: string;
  age: number;
  dob: string;
}

export default function EmployeesPage() {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    fetch('http://localhost:3001/employees')
      .then((response) => response.json())
      .then((data) => setEmployees(data));
  }, []);

  return (
    <div>
      <h1>Employees</h1>

      {employees.map((employee) => (
        <div key={employee.id}>
          <p>ID: {employee.id}</p>
          <p>Name: {employee.name}</p>
          <p>Age: {employee.age}</p>
          <p>DOB: {employee.dob}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}