import { Button, Col, Form, Image, Row } from "react-bootstrap";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import NavBarr from "../components/NavBarr";
import Newsletter from "../components/Newsletter";

export default function Product() {
  return (
    <div>
    <Announcement/>
    <NavBarr/>
        <div className="d-flex" style={{padding:"50px"}}>
        <div style={{ flex: 1 }}>
            <Image 
                src="https://i.ibb.co/T4Z8x1z/233-TS015-M-600-1-533x-removebg-preview.png" 
                style={{ width: "100%", maxHeight: "100vh", objectFit: "cover" }}
                
                fluid 
            />
        </div>
            <div style={{flex: 1, padding: "0px 50px"}}>
                <h1 style={{fontWeight: 200}}>Yonex Shirt</h1>
                <p style={{margin: "20px 0px"}}> 
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, excepturi! Lorem ipsum dolor sit amet.
                </p>
                <Row className="align-items-center justify-content-between" style={{ width: '50%', margin: '30px 0' }}>
                    <Col xs="auto">
                        <span style={{ display: 'inline-block', fontSize: '40px', fontWeight: 200 }}>
                            <span style={{ marginRight: '5px' }}>RM</span>
                            <span>35</span>
                        </span>
                    </Col>
                    <Col xs="auto" style={{ marginTop: '5px' }}>
                        <div>
                            <span style={{ fontSize: '19px', fontWeight: 300 }}>Size</span>
                            <Form.Select aria-label="Size" style={{ fontSize: '13px' }}>
                                <option>XS</option>
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                                <option>XL</option>
                            </Form.Select>
                        </div>
                    </Col>
                </Row>
                {/* Addcontainer */}
                <Row className="align-items-center" style={{ width: '50%' }}>
                    <Col xs="auto" className="d-flex align-items-center">
                        <i className="bi bi-plus" style={{ cursor: "pointer", fontSize: "20px" }} />
                        <span className="d-flex align-items-center justify-content-center" style={{ width: "30px", height: "30px", borderRadius: "10px", border: "1px solid teal", margin: "0px 5px", fontSize: "18px", padding: "5px" }}>1</span>
                        <i className="bi bi-dash" style={{ cursor: "pointer", fontSize: "20px" }} />
                        <Button variant="dark" style={{ fontSize: "14px", padding: "5px 15px", marginLeft: "15px" }}>ADD TO CART</Button>
                    </Col>
                </Row>
            </div>
            </div>
        <Newsletter/>
        <Footer/>
    </div>
  )
}
