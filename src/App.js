import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./view/screen/Home";
import About from "./view/screen/About";
import Courses from "./view/screen/Courses";
import Ourblogs from "./view/screen/Our blogs";
import Teachers from "./view/screen/Teachers";
import Login from "./view/screen/Login";
import Details from "./view/screen/Details";
import Contact from "./view/screen/Contact";
import Register from "./view/screen/Register";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react'
import { Container, Row ,Col,Button, Form, Nav ,Navbar} from "react-bootstrap";
import { menu1 } from "./view/data/Data";
import './view/style/Style.css'
import {FaBook } from 'react-icons/fa';
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt,FaEnvelope } from "react-icons/fa";
function App() {

const[user,setuser]=useState(localStorage.getItem('user'));
console.log(localStorage.getItem('user'))
  console.log(menu1);
  function logout(){
    alert('logout')
    localStorage.clear();
    window.location.reload();
  }
  return (
 <>
 <BrowserRouter>
 <Container>
  <Row>
    <Col>
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" className="nav-div">< FaBook/> <span>e</span>-LEARNING</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
<Nav.Link href="/" className="navbar1-div">Home</Nav.Link>
<Nav.Link href="/About"className="navbar-div">About</Nav.Link>

            {
              menu1.map(function(d){
              return(
                <Nav.Link href={`/${d}`} className="navbar-div">{d}</Nav.Link>
              )
            })
          }
          {user?null:<>
          <Nav.Link href="/register" >Register</Nav.Link>
          <Nav.Link href="/login" >Login</Nav.Link>
          </>
}
           
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            /> */}
           
            <Button variant="outline" href="src\view\screen\Register.js"className="button">Join Now</Button>
          {/* </Form> */}
          {
         user? <Button onClick={logout}>Logout</Button>:null
}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Col>
  </Row>
 </Container >
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/About' element={<About/>}/>
  <Route path='/Details' element={<Details/>}/>
  <Route path='/Courses' element={<Courses/>}/>
  <Route path='/Our blogs' element={<Ourblogs/>}/>
  <Route path='/Contact us' element={<Contact/>}/>
  <Route path='/Teachers' element={<Teachers/>}/>
  
{
user? null:<>
  <Route path='/Register' element={<Register/>}/>
  <Route path='/Login' element={<Login/>}/>
  </>
}
 </Routes>

    <Container>
      <Row className="applicant">
        <Col>Application Form</Col>
        <Col>Call us:+012 345 67890 </Col>
      </Row>
    </Container>

 <>
 <Container fluid>
  {/* footer */}
<footer className="bg-dark text-white pt-5 pb-4">
  <div className="container text-center text-md-left">
  <div className="row text-center text-md-left">
    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
      <h5 className="text uppercase mb-4 font-weight-bold text-warning">Quick Link</h5>
      <p className="text-white">About Us </p>
      <p className="text-white">Contact Us </p>
      <p className="text-white">Privacy Policy </p>
      <p className="text-white">Terms & Conditions </p>
      <p className="text-white">FAQ's & Help  </p>
      </div>
      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
      <h5 className="text uppercase mb-4 font-weight-bold text-warning">Contacts</h5><FaMapMarkerAlt/>
      <p className="text-white">123 Street, New York, USA </p><FaPhoneAlt/>
       <p className="text-white">+012 345 67890 </p><FaEnvelope/>
      <p className="text-white">mail@domain.com </p>
      </div> 
      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
      <h5 className="text uppercase mb-4 font-weight-bold text-warning">Gallery</h5>
      <div class="row g-2 pt-2">
        <div className="col-4">
          <img src={require('./view/img/course-1.jpg')} style={{width:50}}/>
        </div>
        <div className="col-4">
        <img src={require('./view/img/course-2.jpg')} style={{width:50}}/>
        </div>
        <div className="col-4">
        <img src={require('./view/img/course-3.jpg')} style={{width:50}}/>
        </div>
        <div className="col-4">
        <img src={require('./view/img/course-2.jpg')} style={{width:50}}/>
        </div>
        <div className="col-4">
        <img src={require('./view/img/course-3.jpg')} style={{width:50}}/>
        </div>
        <div className="col-4">
        <img src={require('./view/img/course-1.jpg')} style={{width:50}}/>
        </div>
        </div>
      </div> 
      <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
      <h5 className="text uppercase mb-4 font-weight-bold text-warning">NewsLetter</h5>
      <p className="text-white">Dolor amet sit justo amet elitr clita ipsum elitr est. </p>
      <div className="position-relative mx-auto"> 
      <input class="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"></input>
      <button type="button" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
      </div>
      </div>
      <hr className="mb-4"/>
      <div className="roe align-items-center">
        <div className="col=md-7 col-lg-8">
          <p>© Copyright @ 2023| e-Learning , All Right Reserved. Designed by Isha Kanjoliya.
          <strong className="text-warning"></strong>
          </p>
        </div>
      </div>
      <div className="col-md-12 text-center text-md-end">
        <div className="footer-menu">
        <p>Home|Cookies|Help|FAQ's</p>
        </div>
      </div>
    </div> 
  </div>
</footer>
 </Container>
 </>
 </BrowserRouter>
 </>
  );
}

export default App;
