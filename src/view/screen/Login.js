import { Container,Button,Form,Row,Col, Alert } from 'react-bootstrap'
import axios from 'axios';
import{useState} from 'react';
import { useNavigate } from 'react-router-dom';
export default function Login(){
const nav = useNavigate() ; 
const[email,setEmail]=useState('');
const[password,setPassword]=useState('');

let submitlogin=async()=>{
    let params={
      email:email,
      password:password
    }
    
    console.log(params);
    try{
    let res =await axios.post("login",params)
console.log(res.data);

let {success,message} =res.data
if(success){
alert(message)
// console.log(data);
localStorage.setItem('user',email)
nav("/")
}
else{
  alert(message)
}
}catch(error){
    alert(error)
}


setEmail("")
setPassword("")
  }


    return(
        <>
        <h2 className='header'>Login Page.</h2>
        <Container>
            <Row>
            <Col>
        <Form>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="Email" placeholder="Enter email" value={email} onChange={(d)=>setEmail(d.target.value)}  />
        We'll never share your email with anyone else.
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>password</Form.Label>
        <Form.Control type="Password" placeholder="Enter password" value={password} onChange={(d)=>setPassword(d.target.value)}  />
        Password must be Strong.
      </Form.Group>
      
      <Button variant="primary" onClick={submitlogin}>
        Submit
      </Button>
    </Form>
        </Col>
    </Row>
</Container>
</>
    )
}