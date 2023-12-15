import { Button, Col, Row } from "react-bootstrap";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import NavBarr from "../components/NavBarr";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  let subtotal = 0;
  cart.forEach((item) => {
    subtotal += parseInt(item.price.substring(2)) * item.amount;
  });
  const navigate = useNavigate();
  const toShop = () => {
    navigate("/pl");
  };

  return (
    <div>
      <Announcement />
      <NavBarr />
      <div style={{ backgroundColor: "#F8F9F9" }}>
        <div style={{ padding: "20px" }}>
          <h1
            className="text-center"
            style={{ fontWeight: 400, fontSize: "45px" }}
          >
            YOUR BAG
          </h1>
          {/* top */}
          <div
            className="d-flex justify-content-sm-between align-items-center"
            style={{ padding: "20px" }}
          >
            <Button variant="outline-dark" className="mb-3" onClick={toShop}>
              CONTINUE SHOPPING
            </Button>
            <div className="mb-3 d-flex flex-column text-center text-md-start">
              {/* <span style={{ textDecoration: "underline", cursor: "pointer", margin: "0px 20px" }}>Shopping Bag (1)</span> */}
              <span
                style={{
                  textDecoration: "underline",
                  cursor: "pointer",
                  margin: "10px 20px",
                }}
              >
                Your Wishlist (0)
              </span>
            </div>
            <Button variant="outline-dark" className="mb-3">
              CHECKOUT
            </Button>
          </div>
        </div>

        {/* bottom */}
        <Row>
          <Col xs={12} md={8}>
            <div className="d-flex flex-wrap">
              {/* Cart Items */}
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="cart-item-wrapper"
                  style={{ width: "100%", margin: "0 15px" }}
                >
                  <CartItem item={item} />
                </div>
              ))}
            </div>
          </Col>

          {/* summary */}
          <Col xs={12} md={4} className="mb-2">
            <div
              style={{
                border: "1px solid lightgray",
                borderRadius: "10px",
                padding: "20px",
                margin: "0 10px",
                overflow: "auto",
              }}
            >
              <h3 style={{ fontWeight: 200 }}>ORDER SUMMARY</h3>
              <div
                className="d-flex flex-wrap justify-content-between"
                style={{ margin: "5px 0" }}
              >
                <span style={{ fontSize: "20px", margin: "5px 0" }}>
                  Subtotal:
                </span>
                <span style={{ fontSize: "20px", marginBottom: "30px" }}>
                  RM {subtotal}
                </span>
              </div>
              <Button variant="outline-dark">CHECK OUT NOW</Button>
            </div>
          </Col>
        </Row>
      </div>

      <Footer />
    </div>
  );
}
