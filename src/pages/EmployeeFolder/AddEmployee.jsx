import React, { useState, useEffect } from 'react'
import '../../css/addemp.css'
// import Employee from '../../components/Employee'
import AddEmpForm from './AddEmpForm';
import {db} from '../../firebase';
import EditEmpForm from './EditEmpForm'

function AddEmployee() {
    const employeesData = [];
    const [employees, setEmployees] = useState(employeesData);
    const [empObjects,setEmpObjects] = useState({});
    const [currentId,setCurrentId] = useState('');
    const saveState = () => {
        localStorage.setItem('employeeState', JSON.stringify(employees));
    }
    const handleAddNewEmployee = (data) => {
        // setEmployees([...employees, data]);
        // saveState();
        db.child('employees').push(data,
            err=>{
                if(err){
                    console.log(err)
                }
            }) 
    }

    const handleEditEmployee = (data,currentId) => {
        // let localState = JSON.parse(localStorage.getItem('employeeState'));
        // console.log(localState);
        // localState.forEach(element => {
        //     if(element.id == data.id){
        //         element.name = data.name;
        //         element.phone = data.phone;
        //         element.email = data.email;
        //         element.desig = data.desig;
        //         element.dept = data.dept;
        //     }
        // });
        // setEmployees(localState);
        // saveState()
            db.child(`employees/${currentId}`).set(
                data,
                err=>{
                    if(err){
                        console.log(err)
                    }else{
                        setCurrentId('')
                    }
                }
            )
    }

    const onDeleteEmployee = (id) => {
        // console.log(id);
        // setEmployees(employees.filter((data) => data.id !== id));
        if(window.confirm("Are you sure to delete this employee?")){
            console.log(id)
            db.child(`employees/${id}`).remove(
                err=>{
                    if(err){
                        console.log(err)
                    }else{
                        setCurrentId('')
                    }
                }
            )
        }
    }

    useEffect(() => {
        // let localState = JSON.parse(localStorage.getItem('employeeState'));
        // if (localState) {
        //     setEmployees(localState);
        // }
        db.child('employees').on('value',snapshot=>{
            if(snapshot.val()!==null){
                setEmpObjects({
                    ...snapshot.val()
                })
            }
            console.log(empObjects)
        })
    }, [])

    // useEffect(() => {
    //     saveState()
    // }, [employees])

    return (
        <div className="addemp-container">
            <AddEmpForm handleAddNewEmployee={handleAddNewEmployee} />
            {
                Object.keys(empObjects).length > 0 ?
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
                                {
                                Object.keys(empObjects).map(id => {
                                    // <Employee handleEditEmployee={handleEditDept} onDeleteEmployee={onDeleteEmployee} employee={empObjects[id]} key={id} />
                                return <tr key={id}>
                                     <td>{empObjects[id].name}</td>
                                    <td>{empObjects[id].phone}</td>
                                    <td>{empObjects[id].email}</td>
                                    <td>{empObjects[id].desig}</td>
                                    <td>{empObjects[id].dept}</td> 
                                    <td className="actions">
                                        <EditEmpForm currentId={id} empObjects={empObjects} handleEditEmployee={handleEditEmployee}/>
                                        <button onClick={()=>onDeleteEmployee(id)}><span className="material-icons delete-icon">remove_circle</span></button>
                                    </td>
                                </tr>
                            })}
                            </tbody>
                        </table>
                    </div> : <h3>No employees to display</h3>
            }
        </div>
    )
}

export default AddEmployee;
