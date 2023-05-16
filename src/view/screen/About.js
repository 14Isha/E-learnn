import { Container,Row,Col,Card,CardGroup,Form,Button} from "react-bootstrap";
import { aboutmore, blogs, blogs1, echers, teachers } from "../data/Data";
import { ImFacebook,ImTwitter,ImGooglePlus,ImGithub} from "react-icons/im";
import Aos from 'aos';
 import 'aos/dist/aos.css'
 import { useEffect } from "react";

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
  
function About(){
  useEffect(()=> {
    Aos.init({duration:2000});
  },[]);

  return(
    <Container>
      <Row>
        <Col data-Aos="fade-down">
        <img src={require('../img/banner-1920.webp')} className="about-d" />
        
        </Col>
      </Row>

    <Row>
        <Col><h2 style={{fontSize:'35px',
    fontWeight: '600',
    lineHeight: '1.1em',textAlign: 'center', paddingBottom:'40px',marginTop:'60px'}}>e-LEARNING - Core Values and Learning Edge</h2></Col>
    </Row>
    <Row>
    {
aboutmore.map(function(d) 
{
  return(
    <Col>
     <h1 className="more-div1">{d.name} </h1> 
     <p style={{ margin: '0 0 1em', padding: '0',border: '0',font: 'inherit',
verticalalign: 'baseline',fontSize:'20px'}}>Core Values:</p>
<Col className="more-div2">
       <p>E-learning Platform has its campus in Jaipur the capital city of Rajasthan and the famous tourist and business city in north-western India.</p>
       <p>The <b>32-acre JU</b> campus combines unique classical architecture and thoughtful layout and landscaping to create a perfect learning ecosystem. The campus is located around the prime industrial and institutional hub of Jaipur and is well connected with all parts of the city.</p>
       <p>E-learning is driven by the spirit of innovation-led research. This is spelt out in infrastructure as well as practices. The multifaceted research encompasses subject-specific exploration as well as the contexts of the business environment in which our students will operate and perform. JECRC is known for a strong research culture and close industry linkages.</p>
       <p>In order to empower the students with the latest & prevailing technological skills, we have collaborated with industry leaders like<b> Google Cloud, Microsoft, Amazon Web Services, Hewlett Packard Enterprise, Adobe, Tech Mahindra, TCS, IBM, Cisco, Salesforce, Automation Anywhere, UiPath, Alibaba, EC Council, DXC Technology, International Skill Development Corporation (ISDC), Xebia, Samatrix, Sunstone Eduversity, ICT Academy, Bajaj Finserv, ASSOCHAM, Manipal Hospital, Narayana Hrudayalaya Hospital, and NASSCOM</b> etc. Through these alliances, we could not only get the industry experts on board, which is otherwise difficult to deploy for the education ecosystems, but also attained augmented innovation through knowledge exchange.</p>
       <p>JU aims at creating valuable resources for industry and society through its interventions in creation of research and innovative culture, academic and professional enhancement and cultural enrichment.</p>
      <h4>E-learning Edge</h4>
      <ul><li>"Academic integrity and accountability"</li>
      <li>Respect and tolerance for the views of every individual</li>
      <li>Attention to issues of national relevance as well as of global concern</li>
      <li>Breadth of understanding, including knowledge of the human sciences</li>
      <li>An unfettered spirit of exploration, rationality and enterprise</li>
      <li>Strong research orientation and culture based foundation</li>
      <li>Sustainable development and responsible education</li>
      <li>Internationally accepted pedagogy</li>
  </ul>
  </Col>
    </Col>
     )
    })
    }
    </Row>
    
    <Row className="teacher-div">
  {
teachers.map(function(d)
{
  return(
<Col  data-Aos="fade-right">
  <h1>
  Our Instructor
  </h1>
  <p>A mentor is someone confident enough with their experiences and knowledge <br/>in a particular topic or set of topics, to comfortably assist others with less experience or knowledge.</p>
</Col>
)
})
}
</Row>
         <Row>

{

echers.map(function(d)
{
  return(
    
  <Col  data-Aos="fade-up"> 
  <CardGroup >
      <Card>
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
<Row className="recent" >
  {
blogs.map(function(d)
{
  return(
<Col className="bewe" data-Aos="fade-right">
<h5 style={{color:'rgba(59,130,246,5)'}}>WHAT STUDENT SAYS</h5>
  <h1>
  Recent<span style={{color:''}}> Reviews</span>
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
    
  <Col lg={4}  data-Aos="fade-up"> 
  <CardGroup >
      <Card className="hover-div">
        <Card.Body>
          <Card.Title className="card-div">{d.name}</Card.Title>
          <Card.Text className="card-div1">
          It was a great experience having love Babbar sir as a mentor. Thank you sir for teaching DSA concepts in a graspable manner and supporting us throughout the course
          </Card.Text>
         <img src={require('../img/FA_00_F377_7765_4_B5_B_94_BE_E273632_C472_E_Bhoomi_Vaswani_1_277739b054.webp')} style={{width:50}} className="emance"/>
         <Card.Text className="emance1">
         Bhoomi Vaswani
          </Card.Text>
          <Card.Text className="emance2">
       DSA Course
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  </Col>
  )
})
}
</Row>       
<Col md={3}lg={10}  data-Aos="fade-down"> 
    <Form className="dewie">
    <h1 className="now">Get in Touch</h1>
    <p className="no1">The Ultimate Guide To Ace SDE Interviews.</p>
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

    <Form.Group className="mb-3" controlId="formBasicPhoneno.">
        <Form.Control type="number" placeholder="Enter Phone no."className="w2" />
      </Form.Group>
    <textarea placeholder="Message" className="textarea"></textarea>
   
<Form action="#">
      <Button variant="primary" className="message2" >
   SignUp Now
      </Button>
      </Form>
    </Form> 
    </Col>
    </Container>
  );
}
export default About;