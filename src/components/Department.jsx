import React from 'react'
import '../css/addemp.css'
import AddDeptForm from '../pages/AddDeptForm'

const Department = ({dept,onDeleteDept,onEditDept}) => {
    // const dispatch = useDispatch();
    const {deptname,deptcode} =dept
    
    // const clickEdit = (code)=>{
    //     <AddDeptForm key={code} deptname={deptname} deptcode={deptcode}/>
    // }

    return (
        <tr>
            <td>{deptname}</td>
            <td>{deptcode}</td>
            <td className="actions">
                <button onClick={()=>onEditDept(deptname,deptcode)}><span className="material-icons">edit</span></button>
                 <button onClick={()=>onDeleteDept(deptcode)}><span className="material-icons">remove_circle</span></button>
            </td>
        </tr>
    )
}

export default Department
