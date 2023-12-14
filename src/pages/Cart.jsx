import { Button, Container } from "react-bootstrap";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import NavBarr from "../components/NavBarr";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";

export default function Cart() {
    const cart = useSelector((state) => state.cart);
    let subtotal = 0 ;
    cart.forEach((item) => {
        subtotal += parseInt(item.price.substring(2)) * item.amount;
    });
    const navigate = useNavigate();
    const toShop = () => {
        navigate("/pl")
      }

  return (
    <div>
        <Announcement/>
        <NavBarr/>
            <div style={{backgroundColor: "#F8F9F9"}}>
            <div style={{ padding: '20px' }}>
            <h1 className="text-center" style={{ fontWeight: 400, fontSize: "45px" }}>YOUR BAG</h1>
            {/* top */}
            <div className="d-flex justify-content-sm-between align-items-center" style={{ padding: "20px" }}>
                <Button variant="outline-dark" className="mb-3" onClick={toShop}>CONTINUE SHOPPING</Button>
                <div className="mb-3 d-flex flex-column text-center text-md-start">
                {/* <span style={{ textDecoration: "underline", cursor: "pointer", margin: "0px 20px" }}>Shopping Bag (1)</span> */}
                <span style={{ textDecoration: "underline", cursor: "pointer", margin: "10px 20px" }}>Your Wishlist (0)</span>
                </div>
                <Button variant="outline-dark" className="mb-3">CHECKOUT</Button>
            </div>
            </div>


                {/* bottom */}
                <Container>
            
                    {cart.map((item, index)=> (
                        <CartItem key={index} item={item}/>
                    ))}
                    
                </Container>
                        {/* <hr style={{backgroundColor: "#eee", border: "none", height: "1px"}}/> */}
                        {/* product */}
                        
                   
                    {/* summary */}
                    <div style={{flex: 1, border: "1px solid lightgray", borderRadius: "10px", padding: "20px", margin: "15px", maxHeight: "40vh", overflow: "auto"}}>
                        <h3 style={{fontWeight: 200}}>ORDER SUMMARY</h3>
                        <div className="d-flex flex-wrap justify-content-between" style={{margin: "5px 0"}}>
                            <span style={{ fontSize: "20px", margin: "5px 0"}}>Subtotal:</span>
                            <span style={{ fontSize: '20px', marginBottom: "30px" }}>RM {subtotal}</span>
                        </div>
                        <Button variant="outline-dark">CHECK OUT NOW</Button>
                    </div>
                </div>


                
            
        <Footer/>
    </div>
  )
}
