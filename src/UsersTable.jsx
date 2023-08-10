import React, { useState } from 'react';
import './UsersTable.css'

function UsersTable({ employees }) {
  const [updatedEmployees, setUpdatedEmployees] = useState(employees);

  const ChangeDays = (index, days) => {
    const updatedEmps = [...updatedEmployees];
    updatedEmps[index].days = days;
    setUpdatedEmployees(updatedEmps);
  };

  const SalaryDayChange = (index, salaryPerDay) => {
    const updatedEmps = [...updatedEmployees];
    updatedEmps[index].salaryPerDay = salaryPerDay;
    setUpdatedEmployees(updatedEmps);
  };

  const totalSalary = updatedEmployees.reduce((total, employee) => {
    return total + employee.days * employee.salaryPerDay;
  }, 0);

  return (
    <div className='table-wrapper'>
      <table>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Фамилия</th>
            <th>Количество дней</th>
            <th>Ставка за день</th>
            <th>Зарплата</th>
          </tr>
        </thead>
        <tbody>
          {updatedEmployees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.name}</td>
              <td>{employee.surname}</td>
              <td>
                <input
                  type="number"
                  value={employee.days}
                  onChange={(e) => ChangeDays(index, parseInt(e.target.value))}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={employee.salaryPerDay}
                  onChange={(e) => SalaryDayChange(index, parseInt(e.target.value))}
                />
              </td>
              <td>{employee.days * employee.salaryPerDay}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4">Суммарная зарплата:</td>
            <td>{totalSalary}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default UsersTable;