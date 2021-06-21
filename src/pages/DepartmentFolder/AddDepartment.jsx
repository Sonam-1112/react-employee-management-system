import React, { useState, useEffect } from 'react'
import '../../css/adddept.css'
import Department from '../../components/Department'
import AddDeptForm from './AddDeptForm';

function AddDepartment() {
    const deptsData = [];
    const [depts, setDepts] = useState(deptsData);

    const saveState = () => {
        localStorage.setItem('deptState', JSON.stringify(depts));
    }
    const handleAddNewDept = (data) => {
        setDepts([...depts, data]);
        saveState();
    }

    const handleEditDept = (data) => {
        let localState = JSON.parse(localStorage.getItem('deptState'));
        console.log(localState);
        localState.forEach(element => {
            if(element.id == data.id){
                element.deptname = data.deptname;
                element.deptcode = data.deptcode;
            }
        });
        setDepts(localState);
        saveState()
    }

    const onDeleteDept = (id) => {
        setDepts(depts.filter((data) => data.id !== id));
    }

    useEffect(() => {
        let localState = JSON.parse(localStorage.getItem('deptState'));
        if (localState) {
            setDepts(localState);
        }
    }, [])

    useEffect(() => {
        saveState()
    }, [depts])

    return (
        <div className="adddept-container">
            <AddDeptForm handleAddNewDept={handleAddNewDept} />
            {
                depts.length > 0 ?
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
                                    <Department handleEditDept={handleEditDept} onDeleteDept={onDeleteDept} dept={dept} key={dept.id} />
                                ))}
                            </tbody>
                        </table>
                    </div> : <h3>No Departments to display</h3>
            }
        </div>
    )
}
export default AddDepartment;