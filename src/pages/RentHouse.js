import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import { Card } from 'react-bootstrap';


function RentHouse(){
   return (

    

      <Container>
          <Row>
             <Col md={4}>
                 <Card className="my-card" style={{ boxShadow: '2px 2px 5px #999'}} >
                    <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2014/09/04/16/26/house-435618_960_720.jpg"  style={{ height: '200px', width:'100%' }}/>
                     <Card.Body>
                         <Card.Title>4128-34 W. Addison St. / 3601-03 N. Kedvale Ave.</Card.Title>
                     </Card.Body>
                     <Card.Text>
                         $4,545 + 1
                     </Card.Text>
                  
                     
                     <Card.Img variant="top"  src="https://cdn.pixabay.com/photo/2018/04/07/03/06/real-estate-3297625_960_720.jpg" style={{ height: '200px', width:'100%' }}/>
                        <Card.Body>
                            <Card.Title>4889 N Ashland Ave, Chicago, IL 60640</Card.Title>
                        </Card.Body>
                        <Card.Text>$1,415+ 1 bd</Card.Text>
                  </Card>
             </Col>
          </Row>
          <Row>
             <Col md={4}>
                 <Card className="my-card" style={{ boxShadow: '2px 2px 5px #999'}} >
                    <Card.Img variant="top" src="https://photos.zillowstatic.com/fp/1137e5a717412a79702f8405961157ea-cc_ft_768.webp"  style={{ height: '200px', width:'100%' }}/>
                     <Card.Body>
                         <Card.Title>4230 W Nelson St, Chicago, IL 60641</Card.Title>
                     </Card.Body>
                     <Card.Text>
                         $1,300+ 2 bds
                     </Card.Text>
                  
                     
                     <Card.Img variant="top"  src="https://photos.zillowstatic.com/fp/3d3b65a85a5c802c0b04f7107463a1c1-cc_ft_768.webp" style={{ height: '200px', width:'100%' }}/>
                        <Card.Body>
                            <Card.Title>606Blue Apartments</Card.Title>
                        </Card.Body>
                        <Card.Text>$2,595+ 1 bd</Card.Text>
                  </Card>
             </Col>
          </Row>
          <Row>
             <Col md={4}>
                 <Card className="my-card" style={{ boxShadow: '2px 2px 5px #999'}} >
                    <Card.Img variant="top" src="https://photos.zillowstatic.com/fp/a72f0f670d233326586852d41f797612-cc_ft_768.webp"  style={{ height: '200px', width:'100%' }}/>
                     <Card.Body>
                         <Card.Title>3001-07 N. Spaulding Ave./ 3242-48 W. Wellington Ave.</Card.Title>
                     </Card.Body>
                     <Card.Text>
                        $1,600+ 2 bds
                     </Card.Text>
                  
                     
                     <Card.Img variant="top"  src="https://photos.zillowstatic.com/fp/b3a1ccafcaeb925cee01d0d0fb854d3b-cc_ft_768.webp" style={{ height: '200px', width:'100%' }}/>
                        <Card.Body>
                            <Card.Title>4AM1980</Card.Title>
                        </Card.Body>
                        <Card.Text>$1,800+ 1 bd | $2,394+ 2 bds</Card.Text>
                  </Card>
             </Col>
          </Row>
      </Container>

   );

}

export default RentHouse;
