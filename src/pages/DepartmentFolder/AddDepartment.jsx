import React, { useState, useEffect } from 'react'
import '../../css/adddept.css'
import AddDeptForm from './AddDeptForm';
import EditDeptForm from './EditDeptForm';
import {db} from '../../firebase';

function AddDepartment() {
    const deptsData = [];
    const [depts, setDepts] = useState(deptsData);
    const [deptObjects,setDeptObjects] = useState({});
    const [currentId,setCurrentId] = useState('');

    const saveState = () => {
        localStorage.setItem('deptState', JSON.stringify(depts));
    }
    const handleAddNewDept = (data) => {
        // setDepts([...depts, data]);
        // saveState();
        db.child('depts').push(data,
            err=>{
                if(err){
                    console.log(err)
                }
            }) 
    }

    const handleEditDept = (data,currentId) => {
        // let localState = JSON.parse(localStorage.getItem('deptState'));
        // console.log(localState);
        // localState.forEach(element => {
        //     if(element.id == data.id){
        //         element.deptname = data.deptname;
        //         element.deptcode = data.deptcode;
        //     }
        // });
        // setDepts(localState);
        // saveState()
        db.child(`depts/${currentId}`).set(
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

    const onDeleteDept = (id) => {
        // setDepts(depts.filter((data) => data.id !== id));
        if(window.confirm("Are you sure to delete this employee?")){
            console.log(id)
            db.child(`depts/${id}`).remove(
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
        // let localState = JSON.parse(localStorage.getItem('deptState'));
        // if (localState) {
        //     setDepts(localState);
        // }
        db.child('depts').on('value',snapshot=>{
            if(snapshot.val()!==null){
                setDeptObjects({
                    ...snapshot.val()
                })
            }
            console.log(deptObjects)
        })
    }, [])

    useEffect(() => {
        saveState()
    }, [depts])

    return (
        <div className="adddept-container">
            <AddDeptForm handleAddNewDept={handleAddNewDept} />
            {
                Object.keys(deptObjects).length > 0 ?
                    <div className="dept-data">
                        <table className="table">
                            <thead className="table-header">
                                <tr>
                                    <th>Department Name</th>
                                    <th>Department Code</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.keys(deptObjects).map((id) => (
                                    <tr key={id}>
                                    <td>{deptObjects[id].deptname}</td>
                                    <td>{deptObjects[id].deptcode}</td>
                                    <td className="actions">
                                        <EditDeptForm currentId={id} handleEditDept={handleEditDept} deptObjects={deptObjects}/>
                                        <button onClick={()=>onDeleteDept(id)}><span className="material-icons">remove_circle</span></button>
                                    </td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    </div> : <h3>No Departments to display</h3>
            }
        </div>
    )
}
export default AddDepartment;