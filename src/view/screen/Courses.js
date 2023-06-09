import { Container,Row,Col,Card,CardGroup } from "react-bootstrap";
import { courses, courses1,ourcourses1 } from "../data/Data";
import Aos from 'aos';
 import 'aos/dist/aos.css'
 import { useEffect } from "react";
 import { useNavigate } from "react-router-dom";



function Courses(){
  useEffect(()=> {
    Aos.init({duration:2000});
  },[]);
  console.log(courses);
const navigate=useNavigate()
function productinfo(d){
  navigate('Details',{state:d})
  
}
    return(
     <Container>
        <Row className="courses-div">
  {
courses.map(function(d)
{
  return(
<Col>
  <h1>
  
   <span style={{color:"rgb(253, 95, 0)"}}> Our</span> Courses
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
    
  <Col lg={3} data-Aos="fade-right"onClick={()=>{productinfo(d)}} > 
  <CardGroup className="c1-div">
      <Card className="to-dive">
        <Card.Img variant="top" src={d.image} />
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

<Row>
{
ourcourses1.map(function(d) 
{
  return(
    
  <Col lg={3} data-Aos="fade-left" > 
  <CardGroup>
      <Card  className="to-dive" >
        <Card.Img variant="top" src={d.image} />
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


     </Container>
    );
  }
  export default Courses;