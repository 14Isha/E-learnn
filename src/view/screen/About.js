import { Container,Row,Col} from "react-bootstrap";
import { aboutmore } from "../data/Data";
function About(){
  return(
    <Container>
      <Row>
        <Col>
        <div className="about-d">
         {/* <img src={require('.view/img/9-1.jpg')}/>  */}
        </div>
        </Col>
      </Row>
    <Row>
        <Col><h2 style={{fontSize:'35px',
    fontWeight: '600',
    lineHeight: '1.1em',textAlign: 'center', paddingBottom:'40px'}}>e-LEARNING - Core Values and Learning Edge</h2></Col>
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

    </Container>
  );
}
export default About;