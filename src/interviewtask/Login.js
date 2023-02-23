import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Login =()=> {


    const navigate = useNavigate();

    const  Navigation =()=>{
    
    navigate('/students')
    
    }


  return (
    <div>
       <h1>This is Login Page</h1>
       <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
     
      <Button onClick={Navigation} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
 


    </div>
  )
}

export default Login;