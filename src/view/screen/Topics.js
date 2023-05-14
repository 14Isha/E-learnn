import { Container,Row,Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Topics(){
   const nav= useNavigate()
    return(<>
       
    <Container>
        <Row>
            <Col>
            <h1 className="bg-primary text-light p-3">Topics</h1>
            <Button onClick={()=>nav('/profile')}>GoBack</Button>
            </Col>
        </Row>
        <Row>
            <Col>
           <div style={{width:'100%',height:500,backgroundColor:"lightblue"}} className="">

           </div>
            </Col>
        </Row>
    </Container>
    </>
    )
}