import axios from "axios"
import { useEffect, useState } from "react"
import { Button, Col, Container,Row,} from "react-bootstrap";
import {courses1} from '../data/Data'
import Carousel  from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";

export default function Profile(){
let nav=useNavigate()    
  const[pay,setPay]=useState('');

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
let r=0;
res?.data.map(d=>{
  r+=d.rate
})
setPay(r)
setData(res.data)
}
show()

    },[])



    console.log(data);

    function productinfo(){
        
        console.log("productinfo");
    }

console.log(courses1);

async function viewtopics(){

  if(user){
    nav("/topics")
  }
  else{
    nav("/login")

  }
}


    return(
        <>
        <h1 className="shop-cart">Shopping Cart</h1>
        <Container>
            <Row>
                <Col>
                            {data&&data.map(d=>{
                                return(
                                   
                                        <div className="d-flex m-4 ">
                                            <img src={d.image} style={{width:100}}/>
                                            <div>
                                            <p className="mx-5">{d.name}</p>
                                            <p className="mx-5">Rs.{d.rate}/-</p>
                                    
                                            </div>
                                            <Button onClick={viewtopics} >View Topics</Button>
                                          
                                        </div>
                                   
                                )
                            })}
                        
                </Col>
                <Col>
                        <h1>Total Pay:{pay}</h1>
                        <br/>
                        <Button className="bt1" onClick={()=>nav("/payment",{state:pay})}>Payment</Button> 
                </Col>
            </Row>
            <br/>
            <Row>
<Col>
<h3 className="p-3">You might also like</h3>
<Carousel responsive={responsive}
        infinite={true}
        >
          {courses1.map(function(d){
              return(
                  <div>
                    <div>
                      <img src={d.image} style={{width:'80%',height:'80%'}} />
                      <p>{d.name}</p>
                      <i>{d.info}</i>
                    </div> 
                  </div>
                  )
                 })
          }
            
      </Carousel>

  </Col>
</Row>




        </Container>
        </>
    )
}