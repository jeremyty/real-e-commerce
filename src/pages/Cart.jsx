import { Button, Col, Image, Row } from "react-bootstrap";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import NavBarr from "../components/NavBarr";

export default function Cart() {
  return (
    <div>
        <Announcement/>
        <NavBarr/>
            <div style={{backgroundColor: "#F8F9F9"}}>
            <div style={{ padding: '20px' }}>
            <h1 className="text-center" style={{ fontWeight: 400, fontSize: "45px" }}>YOUR BAG</h1>
            {/* top */}
            <div className="d-flex justify-content-sm-between align-items-center" style={{ padding: "20px" }}>
                <Button variant="outline-dark" className="mb-3">CONTINUE SHOPPING</Button>
                <div className="mb-3 d-flex flex-column text-center text-md-start">
                <span style={{ textDecoration: "underline", cursor: "pointer", margin: "0px 20px" }}>Shopping Bag (2)</span>
                <span style={{ textDecoration: "underline", cursor: "pointer", margin: "10px 20px" }}>Your Wishlist (0)</span>
                </div>
                <Button variant="outline-dark" className="mb-3">CHECKOUT</Button>
            </div>
            </div>


                {/* bottom */}
                <div className="d-flex justify-content-between">
                    <div style={{flex: 3}}>
                        <div className="d-flex justify-content-between">
                            {/* product detail */}
                            <Row>
                                <Col xs={12} md={6}>
                                    <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" style={{width: "200px"}} />
                                </Col>
                                <Col xs={12} md={6}>
                                    <div className="d-flex flex-column justify-content-around" style={{padding: "20px"}}>
                                        <span style={{marginBottom: "10px", whiteSpace: 'nowrap'}} className="d-inline-block">
                                            <b>Product:</b> YONEX SHOES
                                        </span>
                                        <span style={{marginBottom: "10px"}}>
                                            <b>ID:</b> 93813718293
                                        </span>
                                        <div style={{width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "black", marginBottom: "10px", }}></div>
                                        <span>
                                            <b>Size:</b> 37.5
                                        </span>
                                    </div>
                                </Col>
                            </Row>
                            {/* price details */}
                            <Row>
                                <Col xs={12} md={{ order: 1 }} className="d-flex align-items-center justify-content-center">
                                    <div className="d-flex align-items-center" style={{ marginBottom: "10px" }}>
                                        <i className="bi bi-plus" style={{ cursor: "pointer", fontSize: "24px" }} />
                                        <div style={{ fontSize: "25px", margin: "5px" }}>1</div>
                                        <i className="bi bi-dash" style={{ cursor: "pointer", fontSize: "24px" }} />
                                    </div>
                                </Col>
                                <Col xs={12} md={{ order: 2 }} className="d-flex align-items-center justify-content-center">
                                    <div style={{ fontSize: "25px", fontWeight: 300, marginBottom: "10px",  }}>RM 35</div>
                                </Col>
                            </Row>
                        </div>
                        <hr style={{backgroundColor: "#eee", border: "none", height: "1px"}}/>
                        {/* product */}
                        
                    </div>
                    {/* summary */}
                    <div style={{flex: 1, border: "1px solid lightgray", borderRadius: "10px", padding: "20px", margin: "20px", maxHeight: "40vh", overflow: "auto"}}>
                        <h3 style={{fontWeight: 200}}>ORDER SUMMARY</h3>
                        <div className="d-flex flex-wrap justify-content-between" style={{margin: "5px 0"}}>
                            <span style={{ fontSize: "19px", margin: "5px 0"}}>Subtotal:</span>
                            <span style={{ fontSize: '19px', marginBottom: "30px" }}>RM 35</span>
                        </div>
                        <Button variant="outline-dark">CHECK OUT NOW</Button>
                    </div>


                </div>
            </div>
        <Footer/>
    </div>
  )
}
