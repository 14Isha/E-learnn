import { staff, teachers,teachers1 } from "../data/Data";
import { Container,Row,Col,Card,CardGroup } from "react-bootstrap";
import { ImFacebook,ImTwitter,ImGooglePlus,ImGithub} from "react-icons/im";
import Aos from 'aos';
 import 'aos/dist/aos.css'
 import { useEffect } from "react";

function Teachers(){
  useEffect(()=> {
    Aos.init({duration:2000});
  },[]);
    return(
        <Container>
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
    
  <Col lg={3} data-Aos="fade-right"> 
  <CardGroup  className="t1">
      <Card className="dive-div">
        <Card.Img variant="top" src={d.image} ></Card.Img>
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

<Row>
{
staff.map(function(d)
{
  return(
    
  <Col lg={3} data-Aos="fade-left"> 
  <CardGroup >
      <Card className="dive-div">
        <Card.Img variant="top" src={d.image} ></Card.Img>
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

      </Container>
    );
  }
  export default Teachers;