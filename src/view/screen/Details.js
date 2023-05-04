import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Col, Container, Row, } from "react-bootstrap";
function Details(){
  const loc=useLocation()
  const [product,setProduct]=useState(loc.state )
  console.log(product);
  return(
   <Container>
    <Row>
      <Col lg={6}> 
      <img src={product.image} />
      </Col>
      <Col  lg={6}>
      <div>
        <p>{product.name}</p>
        <p>{product.info}</p>
      </div>
      </Col>
    </Row>
   </Container>
  );
}
export default Details;