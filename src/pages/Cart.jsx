import { Button, Col, Row } from "react-bootstrap";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import NavBarr from "../components/NavBarr";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useContext, useEffect } from "react";
import { fetchCartItem } from "../feature/cart/cartSlice";
import PayButton from "../components/PayButton";
import { AuthContext } from "../components/AuthProvider";

export default function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const { currentUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const toShop = () => {
    navigate("/pl");
  };

  let subtotal = 0;
  items.forEach((item) => {
    subtotal += item.price * item.amount;
  });

  useEffect(() => {
    dispatch(fetchCartItem()); // Dispatch the action to fetch cart items
  }, [dispatch]);

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
            <div
              className="mb-3 d-flex flex-column text-center text-md-start align-items-center"
              style={{ flex: 1 }} // Allow the flex container to take remaining space
            >
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
          </div>
        </div>

        {/* bottom */}
        <Row>
          <Col xs={12} md={8}>
            <div className="d-flex flex-wrap">
              {/* Cart Items */}

              {items.length > 0 ? (
                items.map((item) => (
                  <div
                    key={item.id}
                    className="cart-item-wrapper"
                    style={{ width: "100%", margin: "0 15px" }}
                  >
                    <CartItem item={item} key={item.id} itemId={item.id} />
                  </div>
                ))
              ) : (
                <p
                  style={{
                    fontSize: "18px",
                    margin: "30px 0",
                    fontStyle: "italic",
                    padding: "0 30px",
                  }}
                >
                  Your cart is currently empty.
                </p>
              )}
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
              {currentUser ? (
                <PayButton items={items} />
              ) : (
                <Button variant="info" onClick={() => navigate("/login")}>
                  Login to Check out
                </Button>
              )}
            </div>
          </Col>
        </Row>
      </div>

      <Footer />
    </div>
  );
}
