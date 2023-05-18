import { Col, Container, Row,Carousel as Car, Button ,Card,CardGroup,Form ,InputGroup} from "react-bootstrap";
import { slider,section, rower, courses, courses1, teachers, teachers1, blogs, blogs1, teste1, contact,info, collab, co1, Apply, discount, counter } from "../data/Data";
import { useNavigate } from "react-router-dom";
import{useState} from 'react';
import { ImFacebook,ImTwitter,ImGooglePlus,ImGithub} from "react-icons/im";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel  from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

 import Aos from 'aos';
 import 'aos/dist/aos.css'
 import { useEffect } from "react";

function Home(){
  const nav = useNavigate();
  const[password,setPassword]=useState('');
 useEffect(()=> {
   Aos.init({duration:2000});
 },[]);

console.log(courses);
const navigate=useNavigate()
function productinfo(d){
  navigate('Details',{state:d})
}

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return(
 <Container fluid >
<Row>
  <Col data-Aos="fade-up">
  <Car>
    {
      slider.map(function(d)
      {
        return(
          <Car.Item>
          <img
            className="d-block w-100 "
            src={d}
            alt="First slide"
          />
          <Car.Caption>
            <h3>'Education Needs Complete Solution'</h3>
            <p>"Skills for your present (and your future). Get started with us."</p>
          </Car.Caption>
        </Car.Item>
        )
      })
    
}
    </Car>

  </Col>
</Row>
<Row className="mt">
<h1></h1>
  {
section.map(function(d)
{
  return(
<Col md={6} lg={3} data-Aos="fade-up">

<Card style={{  }} className="cur  justify-content-center mt ">
    <div className="imgcard w-100 ">
      <Card.Img variant="top" src={d.image}  className="imgcard "/>
      </div>
      <Card.Body className="body-div">
        <Card.Title> {d.name}</Card.Title>
        <Card.Text>
        Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
        </Card.Text>
       
      </Card.Body>
    </Card>
</Col>

  )
}
)}
</Row>

<Row>
  {
    
    rower.map(function(d){
      return(
        <>
        <Col lg={5}md={12}>
          
        <img src={d.image} className="image-div" data-Aos="zoom-in"/>
        </Col>
        <Col lg={6} className="info-div" data-Aos="fade-left" >
        <h1>{d.name} </h1> 
        <p>{d.info}</p>

      <ul className="underline"><li>Skilled Instructors</li>
      <li>Online Classes</li>
      <li>International Certificate</li>
      <li>Skilled Instructors</li>
      <li>Online Classes</li>
      <li>International Certificate</li>
</ul>
        <Col lg={6} className="button-div" >
        
        <Button variant="primary" size="lg" data-Aos="fade-up" onClick={()=>nav('/About')}>
    Read More
        </Button>{''}
          </Col>
        </Col>
        </>
      )
    })
  }
</Row>

<Row >
{
counter.map(function(d)
{
  return(
    
  <Col lg={3} className="div-count"> 
  <CardGroup className="counter-div"data-Aos="fade-right" >
      
        <Card.Body>
          <Card.Text className="counter1">{d.number}</Card.Text>
          <Card.Title className="counter2">{d.name}</Card.Title>
        </Card.Body>
     
    </CardGroup>
  </Col>
  )
})
}
</Row>

<Row className="courses-div">
  {
courses.map(function(d)
{
  return(
<Col>
  <h1>
   <span style= {{color:"rgb(253, 95, 0)"}}> Our</span> Courses
  </h1>
</Col>
)
})
}
</Row>

<Row>
{
courses1.map(function(d) 
{
  return(
    
  <Col lg={3} onClick={()=>{productinfo(d)}} className="mt" data-Aos="fade-right"> 
  <CardGroup>
      <Card className="hover-div">
        <Card.Img variant="top" src={d.image} className="courses-card"/>
        <Card.Body>
        <Card.Title className="item-div">{d.item}</Card.Title>
          <Card.Title className="card-div">{d.name}</Card.Title>
          <Card.Text className="card-div1">
          Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country
          </Card.Text>
          <p >
        <a href="#" class="primary">Apply now</a>
         </p>   
        </Card.Body>
      </Card>
    </CardGroup>
  </Col>
  )
})
}
</Row>

<Row className="teacher-div" >
  {
teachers.map(function(d)
{
  return(
<Col>
  <h1>
  Expert Instructors
  </h1>
</Col>
)
})
}
</Row>
<Row>
{
teachers1.map(function(d)
{
  return(
    
  <Col lg={3} data-Aos="fade-up"> 
  <CardGroup >
      <Card >
        <Card.Img variant="top" src={d.image}className="teachers-card" ></Card.Img>
        <a href="#">
        <div className="d-inline-flex"> <ImFacebook/>
        <div className="flex-div"><ImTwitter/></div>
        <div className="flex-div1"><ImGooglePlus/></div>
        <div className="flex-div2"><ImGithub/></div>
        </div>
        </a>
        
        
        <Card.Body>
          <Card.Title className="card-div">{d.name}</Card.Title>
          <Card.Text className="teach-div">{d.item}</Card.Text>
          <Card.Text className="card-div1">
          I am an ambitious workaholic, but apart from that, pretty simple person.
          </Card.Text>

        </Card.Body>
      </Card>
    </CardGroup>
  </Col>
  )
})
}
</Row>
<Row className="test-div" >
  {
blogs.map(function(d)
{
  return(
<Col>
  <h1>
  Our Students Say!
  </h1>
</Col>
)
})
}
</Row>

<Row>
{
teste1.map(function(d)
{
  return(
    
  <Col lg={3}> 
  <CardGroup className="card" data-Aos="fade-up">
      <Card>
        <Card.Img variant="top" src={d.image} />
        <Card.Body>
          <Card.Title className="teach">{d.name}</Card.Title>
          <Card.Text className="teach1">{d.item}</Card.Text>
          <Card.Text className="teach2">{d.info} </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  </Col>
  )
})
}
</Row>


<Row className="contact-div" >
  {
info.map(function(d)
{
  return(
<Col>
  <h1 className="margin">
  Joined Courses <span style={{color:''}}>Collaborations</span>
  </h1>
  <p>{d.info}</p>
</Col>
)
})
}
</Row>

<Row>
<Col>
<Carousel responsive={responsive}
        autoPlaySpeed={500}
        infinite={true}
        transitionDuration={500}
          autoPlay={true}
        >
          { collab.map(function(d){
              return(
                  <div>
                    <div>
                      <img src={d} style={{width:'180px',height:'180px'}} />
                    </div> 
                  </div>
                  )
                 })
          }
            
      </Carousel>

  </Col>
</Row>
<Row className="contact-div" >
  {
contact.map(function(d)
{
  return(
<Col>
  <h1>
 Courses to <span style={{color:''}}>Enroll</span>
  </h1>
</Col>
)
})
}
</Row>


<Row className="dis1">
  {
    discount.map(function(d){
      return(
        <>
        
        <Col md={6} data-Aos="fade-up">
        <h1 className="dis2">{d.subname} </h1> 
         <h1 className="dis3">{d.name} </h1> 
        <p className="dis3-div">{d.info}</p>

      <ul className="dis4"><li>
        Skilled Instructors, Labore eos amet dolor amet diam</li>
      <li>Online Classes, Etsea et sit dolor amet ipsum</li>
      <li>International, Certificate Diam dolor diam elitripsum vero.</li>
</ul>

</Col>

<Col md={6} className="a1" data-Aos="fade-right"> 
    <Form className="form-div">
    <h1 className="now">Sign Up Now</h1>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label></Form.Label>
        <Form.Control type="name" placeholder="Enter name"  className="w1"/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="Email" placeholder="Enter email"className="w2" />
        We'll never share your email with anyone else.
      </Form.Group>
      
      <Form.Select className="mb-3" aria-label="Default select example" id="w3">
      <option>Select a course</option>
      <option value="1"> course One</option>
      <option value="2">course Two</option>
      <option value="3">course Three</option>
    </Form.Select>
    <Form.Control className="mb-3" type="Password" placeholder="Enter password" value={password} onChange={(d)=>setPassword(d.target.value)}id="w4"/>
        Password must be Strong.
<Form action="#">
      <Button className="mb-3" variant="primary"id="mewe-div"onClick={()=>nav('/Login')}>
   SignUp Now
      </Button>
      </Form>
  
    </Form> 
    </Col>
          
        
        </>
      )
    })
  }
</Row>


<Row className="recent" >
  {
blogs.map(function(d)
{
  return(
<Col>
  <h1>
  Recent<span style={{color:''}}> Blog</span>
  </h1>
  <p className="blog-para">{d.info}</p>
</Col>
)
})
}
</Row>

<Row>
{
blogs1.map(function(d)
{
  return(
    
  <Col lg={4} data-Aos="fade-up"> 
  <CardGroup >
      <Card >
        <Card.Img variant="top" src={d.image} className="blo-div" />
        <Card.Body>
          <Card.Title className="card-div">{d.name}</Card.Title>
          <Card.Text className="card-div1">
          I am an ambitious workaholic, but apart from that, pretty simple person.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  </Col>
  )
})
}
</Row>
<Row className="blog-di" >
  {
blogs.map(function(d)
{
  return(
<Col>
  <h1>
  How to <span className="is1">Apply</span>
  </h1>
</Col>
)
})
}
</Row>

<Row className="blog-divi" >
  {
Apply.map(function(d)
{
  return(
<Col data-Aos="fade-up">
 <img src={d.image} className="about-dy"></img> 
  <h3>{d.name}</h3>
  <p className="blog-para">{d.info}</p>
</Col>
)
})
}
</Row>

<Row>
  <Col className="career" data-Aos="zoom-in-up">
<h3 className="c1">Are you ready to take the next step<br/>towards your future career?</h3>
<Button variant="outline" className="button4"onClick={()=>nav('/Register')} >Application Form</Button>
<Button variant="outline" className="button5">Request Info</Button>
<Button variant="outline" className="button6">Visit</Button>



</Col>
</Row>

<Row className="blog-sec" >
  {
blogs.map(function(d)
{
  return(
<Col>
  <h1>
 Contact Us
  </h1>
</Col>
)
})
}
</Row>
 </Container>

 

  );
}
export default Home;