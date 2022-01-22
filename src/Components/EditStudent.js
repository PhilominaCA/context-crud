import React from 'react'
import { useState,useEffect,useContext } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { useNavigate,useParams } from 'react-router-dom';
import {stuContext} from '../App';

function EditStudent() {
    
    const stuData = useContext(stuContext);

    const params = useParams();
    const nav = useNavigate('');
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [mobile, setmobile] = useState("");
    const [cls, setcls] = useState("");

    const handleSubmit = () => {
        let newData = { name, mobile, email, cls };
        let replicateArray = [...stuData.stu];
        replicateArray.splice(params.id,1,newData)
        stuData.setStu(replicateArray);
        nav("/all-students")
    }

    useEffect(()=>{
        if(params.id < stuData.stu.length
            &&params.id>=0)
        getData();
    else
        alert("No data found for this id...");
    }
    ,[])

    const getData= ()=>{
    setname(stuData.stu[params.id].name);
    setemail(stuData.stu[params.id].email);
    setmobile(stuData.stu[params.id].mobile);
    setcls(stuData.stu[params.id].cls);
    }

    return (
        <div>
            Edit Student
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" value={name} onChange={(e) => setname(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Mobile No.</Form.Label>
                    <Form.Control type="text" placeholder="Mobile" value={mobile} onChange={(e) => setmobile(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" placeholder="Email" value={email} onChange={(e) => setemail(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Batch </Form.Label>
                    <Form.Control type="text" placeholder="Batch" value={cls} onChange={(e) => setcls(e.target.value)} />
                </Form.Group><br/>
                <Button variant="success" onClick={handleSubmit}>Update Student</Button>
            </Form>

        </div>
    )
}

export default EditStudent
