import React,{useState} from 'react'
import Modal from 'react-modal'
import '../css/addemp.css'
import {uniqueId} from '../uniqueid'

function AddEmpForm({handleAddNewEmployee}) {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [desig, setDesig] = useState("");
    const [dept, setDept] = useState("");

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

    const AddEmployee = (e)=>{
        e.preventDefault();
        if(name.trim()!=='' && phone.trim()!=='' && email.trim()!=='' && desig.trim()!=='' && dept.trim()!==''){
            const data =  { id:uniqueId(), name:name, phone:phone, email:email,desig:desig,dept:dept};
            setName('');
            setPhone('');
            setEmail('');
            setDesig('');
            setDept('');
            handleAddNewEmployee(data);
            closeModal();
            }
            else{
                alert("All fields are required!!!")
            }
    }

    return (
        <div>
            <div className="add-emp">
                <button className="add-emp-btn" onClick={openModal}>Add Employee</button>
            </div>
            <Modal 
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                contentLabel="Example Modal">
                <button id="btncancel" onClick={closeModal}>close</button>
                <div className="form">
                    <div className="form-header">
                        <h4>Add Employee</h4>
                    </div>
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Enter phone number" value={phone} onChange={(e) =>setPhone(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Enter e-mail address" value={email} onChange={(e) =>setEmail(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Enter Designation" value={desig} onChange={(e) =>setDesig(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Enter Department" value={dept} onChange={(e) =>setDept(e.target.value)} />
                        </div>
                        <button onClick={(e)=>AddEmployee(e)} className="add-btn" type="submit">ADD</button>
                    </form>
                </div>
            </Modal>
        </div>
    )
}

export default AddEmpForm
