import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';


function Students() {

const[details,setDetails] = useState([]);
const[data,setData] = useState(
    {
        id:'',
        firstname:'',
        surname:''
     }
)

let deletedetails = (id)=>{
axios.delete(`https://63d6953fe60d5743697b7ef1.mockapi.io/DatabaseOperations/${id}`)

}

useEffect(()=>{
axios.get('https://63d6953fe60d5743697b7ef1.mockapi.io/DatabaseOperations').then((response)=>{

console.log(response)
setDetails(response.data)
console.log(details)
})

},[])


let postData = (e)=>{
    e.preventDefault();
console.log(data)

    axios.post('https://63d6953fe60d5743697b7ef1.mockapi.io/DatabaseOperations',data)
}

const updateHandler = (item)=>{
setData({id:item.id,firstname:item.firstname,surname:item.surname})

}



const inputHandler =(e)=>{

    setData({...data,[e.target.name]:e.target.value})

}
const newData = (e)=>{
    e.preventDefault()
    console.log(data)
    axios.put(`https://63d6953fe60d5743697b7ef1.mockapi.io/DatabaseOperations/${data.id}`,data)
}

  return (
    <div>
        <h1>Student Details</h1>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name='firstname' placeholder="Enter Name" onChange={inputHandler} value={data.firstname} />
      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Surname</Form.Label>
        <Form.Control type="text" name="surname" placeholder="Enter Surname" onChange={inputHandler} value={data.surname} />
      </Form.Group>
      
      <Button onClick={postData} variant="primary" type="submit">
        Submit
      </Button>
      <Button onClick={newData} variant="primary" type="submit">
        Update
      </Button>
    </Form>
        {/* <form>
<label>Name</label><br></br>
<input type='text' name='firstname' onChange={inputHandler}  value={data.firstname} placeholder ='Enter your Name'/><br></br>
<label>Surname</label><br></br>
<input type='text' name='surname' onChange={inputHandler} value={data.surname} placeholder = 'Enter your surName'/><br></br>
<button onClick={postData}>Submit</button>
<button onClick={newData}>Update</button>

</form> */}


{
details.map((item)=>{

return(
    <>
    <h3>{item.id}</h3>
    <h3>{item.firstname}</h3>
    <h3>{item.surname}</h3>
    <button onClick={()=>updateHandler(item)}>Update</button>
    <button onClick={()=>deletedetails(item.id)}>Delete</button>
    
    </>
)



})



}

    </div>
  )
}

export default Students;