import React, { useState,useEffect } from 'react'
import '../css/adddept.css'
import Department from '../components/Department'
import AddDeptForm from './AddDeptForm';

function AddDepartment() {
    const deptsData = [];
    const [depts,setDepts] = useState(deptsData);

    const saveState = () =>{
        localStorage.setItem('deptState',JSON.stringify(depts));
    }
    const handleAddNewDept = (data)=>{
        setDepts([...depts,data]);
        saveState();
    }

    const onEditDept = (deptname,deptcode) =>{
        <AddDeptForm deptname={deptname} deptcode={deptcode}/>
    }

    const onDeleteDept = (id) =>{
        console.log(id);
        setDepts(depts.filter((data)=> data.deptcode !== id));
    }

    useEffect(()=>{
        let localState = JSON.parse(localStorage.getItem('deptState'));
        if(localState){
            setDepts(localState);
        }
    },[])

    useEffect(() => {
        saveState()
    }, [depts])

    return (
        <div className="adddept-container">
            <AddDeptForm handleAddNewDept={handleAddNewDept}/>
            {
                depts.length>0?
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
                        {depts.map((dept) => (
                            <Department onEditDept={onEditDept} onDeleteDept={onDeleteDept} dept={dept} key={dept.deptcode} />
                        ))}
                    </tbody>
                </table>
            </div>:<h3>No Departments to display</h3>
            }
        </div>
    )
}
export default AddDepartment;