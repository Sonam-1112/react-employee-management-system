import React from 'react'
import '../css/addemp.css'

const Employee = ({employee,onDeleteEmployee}) => {
    const {id,name,phone,email,desig,dept} = employee
    
    return (
        <tr>
            <td>{name}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td>{desig}</td>
            <td>{dept}</td> 
            <td className="actions">
                <button onClick={()=>{}}><span className="material-icons edit-icon">edit</span></button>
                 <button onClick={()=>onDeleteEmployee(id)}><span className="material-icons delete-icon">remove_circle</span></button>
            </td>
        </tr>
    )
}

export default Employee
