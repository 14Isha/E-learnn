import { Container,Row,Col,Card,Form,Button} from "react-bootstrap";

function Contact(){
    return(
           <Container>
            <Row>
                <Col><h1>Contact us</h1></Col>
            </Row>
<Row>
    <Col>
     <Card style={{ width: '18rem' }}> 
      <Card.Body className="card-contact">
        <Card.Title><h3 style={{fontFamily:'sans-serif',textAlign:'center', fontWeight:'500',fontsize:'22px',lineHeight: '2', color: 'rgba(0, 0, 0, 0.8)'}}>Address</h3></Card.Title>
        <Card.Text><h5 style={{fontSize:'16px', fontFamily: 'Poppins, Arial, sans-serif',textAlign:'center',color: 'rgb(102, 102, 102)',lineHeight: '1.5'}}>
        198 West 21th Street, Suite<br></br>721 New York NY 10016</h5>
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    
    <Col>
     <Card style={{ width: '18rem' }}> 
      <Card.Body className="card-contact">
        <Card.Title><h3 style={{fontFamily:'sans-serif',textAlign:'center', fontWeight:'500',fontsize:'22px',lineHeight: '2', color: 'rgba(0, 0, 0, 0.8)'}}>Contact Number</h3></Card.Title>
        <Card.Text><h5 style={{fontSize:'16px', fontFamily: 'Poppins, Arial, sans-serif',textAlign:'center',lineHeight: '1.5'}}>
        + 1235 2355 98</h5>
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>

    <Col>
     <Card style={{ width: '18rem' }}> 
      <Card.Body className="card-contact">
        <Card.Title><h3 style={{fontFamily:'sans-serif',textAlign:'center', fontWeight:'500',fontsize:'22px',lineHeight: '2', color: 'rgba(0, 0, 0, 0.8)'}}>Email Address</h3></Card.Title>
        <Card.Text><h5 style={{fontSize:'16px', fontFamily: 'Poppins, Arial, sans-serif',textAlign:'center',lineHeight: '1.5'}}>
        info@yoursite.com</h5>
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>

    <Col>
     <Card style={{ width: '18rem' }}> 
      <Card.Body className="card-contact">
        <Card.Title><h3 style={{fontFamily:'sans-serif',textAlign:'center', fontWeight:'500',fontsize:'22px',lineHeight: '2'}}>Website</h3></Card.Title>
        <Card.Text><h5 style={{fontSize:'16px', fontFamily: 'Poppins, Arial, sans-serif',textAlign:'center',lineHeight: '1.5'}}>
        yoursite.com</h5>
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
</Row>
<Row>
    <Col> <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0" className="frame-map"></iframe></Col>
    <Col> 
    <Form className="form-div">
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label></Form.Label>
        <Form.Control type="name" placeholder="Enter name" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="Email" placeholder="Enter email" />
        We'll never share your email with anyone else.
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicSubjects">
      <Form.Control type="subjects" placeholder="Enter Subjects" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      
      <textarea placeholder="Message" className="textarea"></textarea>
<Form action="#">
      <Button variant="primary" className="message" >
    Send Message
      </Button>
      </Form>
    </Form> 
    </Col>
</Row>

           </Container>     
    );
  }
  export default Contact;