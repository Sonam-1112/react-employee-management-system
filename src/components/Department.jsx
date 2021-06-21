import React from 'react'
import '../css/addemp.css'
import EditDeptForm from '../pages/DepartmentFolder/EditDeptForm';

const Department = ({dept,onDeleteDept,handleEditDept}) => {
    // const dispatch = useDispatch();
    const {id,deptname,deptcode} = dept;
    return (
        <tr>
            <td>{deptname}</td>
            <td>{deptcode}</td>
            <td className="actions">
                <EditDeptForm handleEditDept={handleEditDept} dept={dept}/>
                <button onClick={()=>onDeleteDept(id)}><span className="material-icons">remove_circle</span></button>
            </td>
        </tr>
    )
}

export default Department
