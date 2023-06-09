import { Container,Button,Form,Row,Col, Alert } from 'react-bootstrap'
import{useState} from 'react'
import axios from 'axios';
import { image } from '../data/Data';
import { useNavigate } from 'react-router-dom';
export default function Register(){

const nav = useNavigate()
const [name,setName]=useState('');
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');


let submitregister=async()=>{
  try {
    
  let params={
    Username:name,
    email:email,
    password:password
  }
  
  console.log(params);
  let res =await axios.post("register",params)
  console.log(res.data);
  let {success,message} =res.data
  if(success){
  alert(message)
nav("/Login")
  
  }
  else{
    alert(message)
  
  }
  
  setEmail("")
  setPassword("")
  setName("")


  
} catch (error) {
 alert('error')   
}
    }
    let submitlogin=async()=>{
      
      let params={
        email:email,
        password:password
      }





}
return(
    <>
    <h2 className='header'>Get's Started.</h2>
    <div className='header-start'></div>
<Container>
    <Row>
      <Col>
      {
image.map(function(d)
{
  return(
<Col>
  <img src={d.image} className='img-div'/>
</Col>
)
})
}
    </Col>

        <Col md={6}>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Enter name" value={name} onChange={(d)=>setName(d.target.value)} />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="Email" placeholder="Enter email" value={email} onChange={(d)=>setEmail(d.target.value)} />
        We'll never share your email with anyone else.
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>password</Form.Label>
        <Form.Control type="Password" placeholder="Enter password" value={password} onChange={(d)=>setPassword(d.target.value)} />
        Password must be Strong.
      </Form.Group>
      
      <Button variant="primary"className="bt1" onClick={submitregister}>
    Register
      </Button>
    </Form>
        </Col>
    </Row>
    <Row>
      <Col style={{justifyContent:'center',textAlign:'center'}} className='w-100  p-4'>
        <div><hr/></div>
      <Button variant="primary" onClick={()=>nav('/login')}>
       Login
      </Button>
      </Col>
    </Row>
</Container>
</>
)


}