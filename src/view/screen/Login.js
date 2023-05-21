import { Container,Button,Form,Row,Col, Alert } from 'react-bootstrap'
import axios from 'axios';
import{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { image } from '../data/Data';
export default function Login(){
const nav = useNavigate() ; 
const[email,setEmail]=useState('');
const[password,setPassword]=useState('');

let submitlogin=async()=>{
  try {
    
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
window.location.reload();
}
else{
  alert(message)
}
}catch(error){
    alert(error)
}


setEmail("")
setPassword("")


} catch (error) {
 alert('Error')   
}
  }


    return(
        <>

<h2 className='header'>Welcome back!</h2>
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
      <br/>
      <Button variant="primary"className="bt1" onClick={submitlogin} >
      Login
      </Button>
    </Form>
        </Col>
    </Row>
    <Row>
      <Col style={{justifyContent:'center',textAlign:'center'}} className='w-100  p-4'>
        <div><hr/></div>
      <Button variant="primary" onClick={()=>nav('/register')}>
       Register
      </Button>
      </Col>
    </Row>
</Container>


</>
    )
}