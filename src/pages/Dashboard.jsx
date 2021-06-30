import React, { useState, useEffect } from "react";
import "../css/dashboard.css";
import { db } from "../firebase";

function Dashboard() {
  //   let empArray = JSON.parse(localStorage.getItem("employeeState"));
  //   let deptArray = JSON.parse(localStorage.getItem("deptState"));
  const [empObjects, setEmpObjects] = useState({});
  const [deptObjects, setDeptObjects] = useState({});

  useEffect(() => {
    db.child("employees").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setEmpObjects({
          ...snapshot.val(),
        });
      }
      console.log(empObjects);
    });
    db.child("depts").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setDeptObjects({
          ...snapshot.val(),
        });
      }
      console.log(deptObjects);
    });
  }, []);

  return (
    <div className="dashboard-container">
      <div className="row">
        <div className="card">
          <h1 className="total-heading">Total Employees</h1>
          <h2 className="total-value">{Object.keys(empObjects).length}</h2>
        </div>
        <div className="card">
          <h1 className="total-heading">Total Departments</h1>
          <h2 className="total-value">{Object.keys(deptObjects).length}</h2>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
