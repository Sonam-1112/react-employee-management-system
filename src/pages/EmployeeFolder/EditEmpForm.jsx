import React,{useState,useEffect} from 'react'
import Modal from 'react-modal'

function EditEmpForm({handleEditEmployee,currentId,empObjects}) {
    // const initialValues={
    //     name:"",
    //     phone:"",
    //     email:"",
    //     desig:"",
    //     dept:""
    // }
    const [name, setName] = useState(empObjects[currentId].name);
    const [phone, setPhone] = useState(empObjects[currentId].phone);
    const [email, setEmail] = useState(empObjects[currentId].email);
    const [desig, setDesig] = useState(empObjects[currentId].desig); 
    const [dept, setDept] = useState(empObjects[currentId].dept);
    // const [values,setValues] = useState(initialValues);

    useEffect(() => {
        if(currentId==''){
            console.log("Empty")
        }
        else{
            console.log("Not Empty")
        }
    }, [currentId,empObjects])

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

    const EditEmployee = (e)=>{
        e.preventDefault();
        if(name.trim()!=='' && phone.trim()!=='' && email.trim()!=='' && desig.trim()!=='' && dept.trim()!==''){
            // const data =  { empObjects[currentId].id, empObjects[currentId].name, phone:empObjects[currentId].phone, email:empObjects[currentId].email,desig:empObjects[currentId].desig,dept:empObjects[currentId].dept};
            const values = {name,phone,email,desig,dept} 
            handleEditEmployee(values,currentId);
            closeModal();
            }
            else{
                alert("All fields are required!!!")
            }
    }

    return (
        <div>
            <button onClick={()=>{openModal()}}><span className="material-icons edit-icon">edit</span></button>
            <Modal 
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                contentLabel="Example Modal">
                <button id="btncancel" onClick={closeModal}>close</button>
                <div className="form">
                    <div className="form-header">
                        <h4>Edit Employee</h4>
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
                        <button onClick={(e)=>EditEmployee(e)} className="add-btn" type="submit">Edit</button>
                    </form>
                </div>
            </Modal>
        </div>
    )
}

export default EditEmpForm
