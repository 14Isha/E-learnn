import { useLocation } from "react-router-dom";
import{blogs, courses, courses1, teste1,}from'../data/Data'
import { useState } from "react";
import { Col, Container, Row,Card,CardGroup} from "react-bootstrap";

function Details(){

  const loc=useLocation()
  const [productinfo,]=useState(loc.state )
  console.log(courses,courses1);

  return(
   <Container>
    <Row>
      <>
      <Col> 
      <img src={productinfo.image} alt="" className="rock" />
      <h1></h1>
      </Col>
      <Col>
        <p className="detail1">{productinfo.name}</p>
        <ul><li className="d1">Why We <span style={{color:'#06bbcc'}}>Learn</span>?
</li><li className="d2">Versatility</li>

<li className="d3">Machine Learning, AI, Web Development, Hacking, IoT, and more. Python is used everywhere.</li>

<li className="d2">Beginner friendly</li>

<li className="d3">A simple and powerful syntax makes Python one of the easiest languages to learn.</li>

<li className="d2">Be in demand</li>

<li className="d3">Python is the fastest growing language according to Stack Overflow with an average fresher salary of 5 LPA+ according to Glassdoor.</li></ul>
<button className="bt1">Enroll Now</button>
        </Col>  
       
<Row >
<Col>
  <h1 className="high1">Course Highlights</h1>

  <Row className="high2">
<Col>
  {/* <img src={require('img/Highlights/')}/>  */}
  <h3 className="blog-pdiv1">Learn online</h3>
  <p className="blog-pdiv">At your own schedule</p>
 </Col>
<Col>
  <h3 className="blog-pdiv1">Mobile friendly</h3>
  <p className="blog-pdiv">No laptop? No problem</p></Col>
<Col>
  <h3 className="blog-pdiv1">Placement assistance</h3>
  <p className="blog-pdiv">To build your career</p>
</Col>
<Row>
<Col>
  <h3 className="blog-pdiv1">Certificate of Training</h3>
  <p className="blog-pdiv">From Internshala Trainings</p>
</Col>
<Col>
  <h3 className="blog-pdiv1">5 assignments & 1 project</h3>
  <p className="blog-pdiv">For hands-on practice</p>
</Col>
<Col>
  <h3 className="blog-pdiv2">Beginner friendly</h3>
  <p className="blog-pdiv3">No prior knowledge required</p>
</Col>
</Row>
<Row><Col>
  <h3 className="blog-pdiv1">Downloadable content</h3>
  <p className="blog-pdiv">With lifetime access</p>
</Col>
<Col>
  <h3 className="blog-pdiv1">6 weeks duration</h3>
  <p className="blog-pdiv">1 hr/day (flexible schedule)</p>
</Col>
<Col>
  <h3 className="blog-pdiv2">Learn in English, हिन्दी, বাংলা</h3>
  <p className="blog-pdiv3">As per your choice</p>
</Col>
</Row>
</Row>
</Col>
</Row>
      </>
    </Row>
    <Row className="test-div" >
  {
blogs.map(function(d)
{
  return(
<Col>
  <h1>
  Our Reviews!
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
  <CardGroup className="card" data-Aos="fade-right">
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
   </Container>
  );
}
export default Details;