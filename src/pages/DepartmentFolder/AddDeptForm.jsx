import React,{useState} from 'react'
import Modal from 'react-modal'
import {uniqueId} from '../../uniqueid'

function AddDeptForm({handleAddNewDept}) {
    const [deptname, setDeptname] = useState("");
    const [deptcode, setDeptcode] = useState("");

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

    const AddDept = (e)=>{
        e.preventDefault();
        if(deptname.trim()!=='' && deptcode.trim()!==''){
            const data =  { id:uniqueId(), deptname:deptname,deptcode:deptcode};
            setDeptname('');
            setDeptcode('');
            handleAddNewDept(data);
            closeModal();
            }
            else{
                alert("All fields are required!!!")
            }
        }

    return (
        <div>
            <div className="add-dept">
                <button className="add-dept-btn" onClick={openModal}>Add Department</button>
            </div>
            <Modal 
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                contentLabel="Example Modal">
                <button id="btncancel" onClick={closeModal}>close</button>
                <div className="form">
                    <div className="form-header">
                        <h4>Add Department</h4>
                    </div>
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Enter Department name" value={deptname} onChange={(e) => setDeptname(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Enter Department Code" value={deptcode} onChange={(e) =>setDeptcode(e.target.value)} />
                        </div>
                        <button onClick={(e)=>AddDept(e)} className="add-btn" type="submit">ADD</button>
                    </form>
                </div>
            </Modal>
        </div>
    )
}

export default AddDeptForm
