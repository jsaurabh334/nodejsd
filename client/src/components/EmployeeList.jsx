import React, { useEffect, useState } from "react";
import axios from "axios";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api"); // Adjust the URL as needed
        setEmployees(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch employees");
        setLoading(false);
        console.log(err);
      }
    };

    fetchEmployees();
  }, []);

  if (loading) return <p>Loading employee data...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mt-4">
      <h3>Employee List</h3>
      {employees.length === 0 ? (
        <p>No employees found.</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp, index) => (
              <tr key={emp._id || index}>
                <td>{index + 1}</td>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default EmployeeList;
