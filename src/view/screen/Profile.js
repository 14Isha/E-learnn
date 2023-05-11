import axios from "axios"
import { useEffect, useState } from "react"
import { Button, Col, Container,Row,CardGroup,Card } from "react-bootstrap";
import {collab,contact,courses1} from '../data/Data'
import Carousel  from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function Profile(){
    
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
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

    const[data,setData]=useState('');
    const[user,setUser]=useState(localStorage.getItem('user'));
    useEffect(()=>{

async function show(){

    let res =await axios.post('showenroll',{user:user})
console.log(res?.data);
    setData(res.data)
}
show()

    },[])



    console.log(data);

    function productinfo(){
        
        console.log("productinfo");
    }

console.log(courses1);
    return(
        <>
        <h1>profiles</h1>
        <Container>
            <Row>
                <Col>
                        
                            {data&&data.map(d=>{
                                return(
                                   
                                        <div className="d-flex m-4 shadow-sm">
                                            <img src={d.image} style={{width:100}}/>
                                            <p className="mx-5">{d.name}</p>
                                            <Button >View Topics</Button>
                                        </div>
                                   
                                )
                            })}
                        
                </Col>
                <Col>
                    
                </Col>
            </Row>
            <Row>
<Col>
<h1 style={{backgroundColor:'blue',color:'white'}} className="p-4">Course</h1>
<Carousel responsive={responsive}
        autoPlaySpeed={500}
        infinite={true}
        transitionDuration={500}
          autoPlay={true}
        >
          { courses1.map(function(d){
              return(
                  <div>
                    <div>
                      <img src={d.image} style={{width:'180px',height:'180px'}} />
                      <p>{d.name}</p>
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
        </Container>
        </>
    )
}