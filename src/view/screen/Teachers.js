import { staff, teachers,teachers1 } from "../data/Data";
import { Container,Row,Col,Card,CardGroup } from "react-bootstrap";
import { ImFacebook,ImTwitter,ImGooglePlus,ImGithub} from "react-icons/im";

function Teachers(){
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
    
  <Col lg={3}> 
  <CardGroup  className="t1">
      <Card className="dive-div">
        <Card.Img variant="top" src={d.image} ></Card.Img>
        <div className="d-inline-flex pt-2 px-2"> <ImFacebook/><ImTwitter/><ImGooglePlus/><ImGithub/></div>
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
    
  <Col lg={3}> 
  <CardGroup >
      <Card >
        <Card.Img variant="top" src={d.image} ></Card.Img>
        <div className="d-inline-flex pt-2 px-2"> <ImFacebook/><ImTwitter/><ImGooglePlus/><ImGithub/></div>
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