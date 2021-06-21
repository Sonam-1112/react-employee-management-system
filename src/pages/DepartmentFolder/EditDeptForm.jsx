import React,{useState} from 'react'
import Modal from 'react-modal'
import { uniqueId } from '../../uniqueid';

function EditDeptForm({handleEditDept,dept}) {
    const [deptname, setDeptname] = useState(dept.deptname);
    const [deptcode, setDeptcode] = useState(dept.deptcode);

    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function afterOpenModal() {
        // subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    const EditDept = (e)=>{
        e.preventDefault();
        if(deptname.trim()!=='' && deptcode.trim()!==''){
            const data =  { id:dept.id,deptname:deptname,deptcode:deptcode};
            // setDeptname('');
            // setDeptcode('');
            handleEditDept(data);
            closeModal();
            }
            else{
                alert("All fields are required!!!")
            }
        }

    return (
        <div>
            <button onClick={()=>openModal()}><span className="material-icons">edit</span></button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                contentLabel="Example Modal">
                <button id="btncancel" onClick={closeModal}>close</button>
                <div className="form">
                    <div className="form-header">
                        <h4>Edit Department</h4>
                    </div>
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Enter Department name" value={deptname} onChange={(e) => setDeptname(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Enter Department Code" value={deptcode} onChange={(e) =>setDeptcode(e.target.value)} />
                        </div>
                        <button onClick={(e)=>EditDept(e)} className="add-btn" type="submit">Edit</button>
                    </form>
                </div>
            </Modal>
        </div>
    )
}

export default EditDeptForm
