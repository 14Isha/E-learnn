import { Container,Row,Col,Card, CardGroup} from "react-bootstrap";
import { blogs, blogs1, ourblogs1 } from "../data/Data";
import Aos from 'aos';
 import 'aos/dist/aos.css'
 import { useEffect } from "react";
  

function Courses(){

    useEffect(()=> {
        Aos.init({duration:2000});
      },[]);
     
    return(
     <Container>
        <Row className="courses-div">
  {
blogs.map(function(d)
{
  return(
<Col>
  <h1>
   <span style={{color:"rgb(253, 95, 0)"}}> Our</span> Blogs
  </h1>
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
    
  <Col lg={3} data-Aos="fade-right"> 
  <CardGroup >
      <Card >
        <Card.Img variant="top" src={d.image} />
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


<Row>
{
ourblogs1.map(function(d)
{
  return(
    
  <Col lg={3} data-Aos="fade-down"> 
  <CardGroup >
      <Card >
        <Card.Img variant="top" src={d.image} />
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


</Container>
    );
  }
  export default Courses;