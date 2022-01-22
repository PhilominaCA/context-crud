import React,{useContext} from 'react'
import { Table,Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {stuContext} from '../App';

function AllStudents() {
//subscribing context
    const stuData = useContext(stuContext);

  const handleDelete = (id) =>{
      let replicateArray=[...stuData.stu];
      replicateArray.splice(id,1)
      stuData.setStu(replicateArray);
  }

    return (
        <div>
            <h2>All Student Records</h2>
            <hr/>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th> Name</th>
                        <th>Email
                        </th>
                        <th>Mobile</th>
                        <th>Batch</th>
                        <th>Edit/Delete record</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        stuData.stu.map((e, i) => {
                            return <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{e.name}</td>
                                <td>{e.email}</td>
                                <td>{e.mobile}</td>
                                <td>{e.cls}</td>
                                <td><Button variant="danger" onClick={()=>handleDelete(i)}>Delete</Button>
                               <Link to={`/edit-students/${i}`}> &nbsp;&nbsp;
                                   <Button variant='primary'>Edit</Button>
                               </Link>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default AllStudents
