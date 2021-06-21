import React from 'react'
import '../css/addemp.css'
import EditEmpForm from '../pages/EmployeeFolder/EditEmpForm'

const Employee = ({employee,onDeleteEmployee,handleEditEmployee}) => {
    const {id,name,phone,email,desig,dept} = employee
    
    return (
        <tr>
            <td>{name}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td>{desig}</td>
            <td>{dept}</td> 
            <td className="actions">
                <EditEmpForm handleEditEmployee={handleEditEmployee} employee={employee}/>
                <button onClick={()=>onDeleteEmployee(id)}><span className="material-icons delete-icon">remove_circle</span></button>
            </td>
        </tr>
    )
}

export default Employee
