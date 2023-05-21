import { useLocation,useNavigate } from "react-router-dom";
import{blogs, courses, courses1, teste1,staff,teachers}from'../data/Data'
import { useState } from "react";
import { Col, Container, Row,Card,CardGroup,} from "react-bootstrap";
import axios from "axios";
import { ImFacebook,ImTwitter,ImGooglePlus,ImGithub} from "react-icons/im";

function Details(){
const nav = useNavigate();
  const loc=useLocation()
  const [productinfo,]=useState(loc.state )
  console.log(courses,courses1);
const[user,setUser] = useState(localStorage.getItem('user'))
  async function enrolluser(data){

    if(user){

        try {
          console.log(data);
let params={
      ...data,
      user:user
}

console.log(params);

let res = await axios.post("enrollcourse",params).catch((r)=>console.log(r));
const{success,message}=res?.data

if(success){
alert(message)
      nav("/profile")
}
else{

}
        } catch (error) {
          
          console.log(error);
        }
    }
    else{
      nav('/login')

    }
  }

  return(
   <Container>
    <Row>
      <>
      <Col lg={12}> 
      <img src={require('../img/details.webp')} className="rock"/>
      <h1></h1>
      </Col>
    <Col>
        <p className="detail1">Certified online Course</p>
        <h1 className="d1">Learn Programming<br/> Languages</h1>
        <p className="d3">Master Java basics and concepts of Object Oriented<br/> Programming and develop an awesome game</p>
        <div className="tag">
          <div className="icon-tag">
          <img src={require('../img/star-filled-fiveointed-shape.png')} className="icon-tag1"/>
         &nbsp;4.3
          </div>
          <div className="icon-tagie">
          <img src={require('../img/teamwork.png')} className="icon-tag1"/>
         &nbsp; 23,773 Students
          </div>
          <div className="icon-tagie"><img src={require('../img/calendar.png')} className="icon-tag1"/>
          &nbsp;6 Weeks, 1 hr/day (flexible schedule)
          </div>
       </div>
       <div className="title-con">
       <div className="title-con1">
          <img src={require('../img/signup_page.png')} className="title-con2"/>
         <p className="do"></p>
         <b>1+1 Offer:</b>
         Get Internship & Job Preparation training 
         <b>FREE:</b>
          on purchase of Core Java training!
          </div>
          </div>
          <div id="cp">
          <div className="cp1"> Course Price
          <p className="cp2">1349₹ <span style={{color:'#333', fontweight:'600',fontSize:'15px', fontfamily:' Arial, Helvetica, sans-serif;'}}>Valid till 19th May</span></p>
          </div>
          <button className="bt1" onClick={()=>enrolluser(productinfo)}>Enroll Now</button>
          </div>
         
        </Col>  
       
<Row>
<Col>
  <Row className="high2">
  <h1 className="hig"></h1>
  <p id="highli">Course Highlights</p>
<Col>
   <img src={require('../img/incourses/video_tutorials.webp')} />  
  <h3 className="blog-pdiv1">Learn online</h3>
  <p className="blog-pdiv">At your own schedule</p>
 </Col>
<Col>
<img src={require('../img/incourses/doubt_clearing.webp')}/>  
  <h3 className="blog-pdiv1">Doubt clearing</h3>
  <p className="blog-pdiv">Through Q&A forum</p></Col>
<Col>
<img src={require('../img/incourses/placement_assistance.webp')} />  
  <h3 className="place">Placement assistance</h3>
  <p className="blog-pdiv">To build your career</p>
</Col>
<Row>
<Col>
<img src={require('../img/incourses/certificate_of_training.webp')}/>  
  <h3 className="blog-pdiv1">Mobile friendly</h3>
  <p className="blog-pdiv">No laptop? No problem</p>
</Col>
<Col>
<img src={require('../img/incourses/certificate_of_training.webp')}/>  
  <h3 className="blog-pdiv1">Certificate of Training</h3>
  <p className="blog-pdiv">From e-Learning Trainings</p>
</Col>
<Col>
<img src={require('../img/incourses/beginner_friendly.webp')} className="pro-div"/>  
  <h3 className="blog-pdiv2">Beginner friendly</h3>
  <p className="blog-pdiv3">No prior knowledge required</p>
</Col>
</Row>
<Row><Col>
<img src={require('../img/incourses/downloadable_content.webp')}/>  
  <h3 className="blog-pdiv1">Downloadable content</h3>
  <p className="blog-pdiv">With lifetime access</p>
</Col>
<Col>
<img src={require('../img/incourses/weeks.webp')}/>  
  <h3 className="blog-pdiv1">6 weeks duration</h3>
  <p className="blog-pdiv">1 hr/day (flexible schedule)</p>
</Col>
<Col>
<img src={require('../img/incourses/language.webp')}/>  
  <h3 className="blog-pdiv2">Learn in English, हिन्दी, বাংলা</h3>
  <p className="blog-pdiv3">As per your choice</p>
</Col>
</Row>
</Row>
</Col>
</Row>
      </>
    </Row>

    <Row>
      <Col>
        <h1 style={{position:'relative',top:'50px',textAlign:'center'}}>
        Your Teachers
        </h1>
      </Col>
      </Row>

    <Row>
{ 
  <Col lg={3}> 
  <CardGroup >
      <Card style={{position:'relative',top:'70px',left:'320px'}}>
      <img src={require('../img/teachers1/team-2.jpg')}/>  
        <a href="#">
        <div className="d-inline-flex"> <ImFacebook/>
        <div className="flex-div"><ImTwitter/></div>
        <div className="flex-div1"><ImGooglePlus/></div>
        <div className="flex-div2"><ImGithub/></div>
        </div>
        </a>
        <Card.Body>
         <div className="card-div">Sreya Siddhartha</div>
          <div className="teach-div">Subject Matter Expert</div>
         </Card.Body>
        
      </Card>
    </CardGroup>
  </Col>
}
{ 
  <Col lg={3}> 
  <CardGroup >
      <Card style={{position:'relative',top:'70px',left:'340px'}}>
      <img src={require('../img/teachers1/team-3.jpg')}/>  
        <a href="#">
        <div className="d-inline-flex"> <ImFacebook/>
        <div className="flex-div"><ImTwitter/></div>
        <div className="flex-div1"><ImGooglePlus/></div>
        <div className="flex-div2"><ImGithub/></div>
        </div>
        </a>
        <Card.Body>
          <div className="card-div">Harsh Deep Singh</div>
          <div className="teach-div">Senior Educator</div>
        </Card.Body>
      </Card>
    </CardGroup>
  </Col>
}
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
  <CardGroup className="card" >
      <Card>
        <Card.Img variant="top" src={d.image}/>
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
<Row className="courses-div">
  {
courses.map(function(d)
{
  return(
<Col>
  <h1 style={{fontSize:'35px'}}>
  
   <span style={{color:"rgb(253, 95, 0)"}}> Our</span> top pick courses!
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
    
  <Col lg={3} onClick={()=>{productinfo(d)}} > 
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


<Row className="courses-div">
  {
blogs.map(function(d)
{
  return(
<Col>
  <h1>
   Training <span style={{color:'Highlight'}}>FAQ'S</span>
  </h1>
</Col>
)
})
}</Row>

<Row>
<Col className="faq-div">      
      
       Q1. What is electric?
       <br/>
    Electric Engineering is a general-purpose programming language which has controlled the world in its own ways. It is mostly used in Data Analysis, Scientific computing and Machine Learning. It has totally hijacked the internet and technology through its efficiency and capabilities. Python can easily develop task automation, data visualization and data analysis.
    <br/><br/><hr/>
 Q2. Is Electric Engineering a good career choice?
  <br/>
Honestly, Electric is the fastest-growing programming language. It is irreplaceable and more efficient than Java and C++ in Data Science and many other fields. It can be a perfect career choice if you are interested. <ol>
  You can be one of the following when you learn python programming-
  <br/>
<li>
Software Engineer</li>
<li>Research Analyst</li>
<li>Python Developer</li>
<li>Data Scientist</li>
<li>Machine Learning Engineer</li>
<li>Data Analyst</li></ol><hr/>
Q3. What is the usage of electric?
<br/>
This question may resemble many. Python has its own significance because of its simple syntax and is adaptable in various sectors of the world. Some of the Python usages are as-
<ol><li>Web developers: They use Python to build web applications with popular web frameworks such as Flask and Django.</li>
<li>Financial advisors: Python has been used to make the market more predictable and manage the capital.</li>
<li>Data journalists: They use it to create stories with data analyst capabilities.</li></ol>
</Col>
</Row>
   </Container>
  );
}
export default Details;