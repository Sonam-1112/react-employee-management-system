import React, { useState,useEffect } from 'react'
import '../css/addemp.css'
import Employee from '../components/Employee'
import AddEmpForm from './AddEmpForm';

function AddEmployee() {
    
    const employeesData = []; 

    const [employees,setEmployees] = useState(employeesData);

    const saveState = () =>{
        localStorage.setItem('employeeState',JSON.stringify(employees));
    }
    const handleAddNewEmployee = (data)=>{
        setEmployees([...employees,data]);
        saveState();
    }

    const onDeleteEmployee = (id) =>{
        console.log(id);
        setEmployees(employees.filter((data)=> data.id !== id));
    }

    useEffect(()=>{
        let localState = JSON.parse(localStorage.getItem('employeeState'));
        if(localState){
            setEmployees(localState);
        }
    },[])

    useEffect(() => {
        saveState()
    }, [employees])


    return (
        <div className="addemp-container">
            <AddEmpForm handleAddNewEmployee={handleAddNewEmployee}/>
            {
                employees.length>0?
            <div className="emp-data">
                <table className="table">
                    <thead className="table-header">
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>E-mail</th>
                            <th>Designation</th>
                            <th>Department</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee) => (
                            <Employee onDeleteEmployee={onDeleteEmployee} employee={employee} key={employee.id} />
                        ))}
                    </tbody>
                </table>
            </div>: <h3>No employees to display</h3>
        }
        </div>
    )
}

export default AddEmployee;
