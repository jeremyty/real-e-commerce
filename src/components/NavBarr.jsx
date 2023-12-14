import { Badge } from "@mui/material";
import { Container, Form, Image, Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function NavBarr() {
  const logo = "https://rb.gy/v00p0y";
  const cart = useSelector((state) => state.cart);

  const totalItemInCart = cart.reduce((accumulator, item) => {
    return accumulator + item.amount;
  }, 0);


  return (
    <Navbar bg="dark" expand="md" variant="dark">
      <Container fluid className="d-flex align-items-center">
      <Navbar.Brand href="/">
          <Image src={logo} alt="badminton Logo" roundedCircle style={{ width: 65 }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="me-3" style={{ color: "white" }}>
              EN
            </Nav.Link>
          </Nav>
          <Form className="position-relative me-3">
            <Form.Control
              placeholder="Search"
              className="me-1 pr-4"
              aria-label="Search"
              style={{ fontSize: "12px" }}
            />
            <i
              className="bi bi-search position-absolute"
              style={{
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "black",
              }}
            ></i>
          </Form>
          <Nav className="ms-4">
            
            <Nav.Link href="login">
              <i className="bi bi-person" style={{fontSize: "22px"}}/>
            </Nav.Link>
            <Nav.Link href="cart">
              <Badge badgeContent={totalItemInCart} color="primary">
                <i className="bi bi-cart"></i>
              </Badge>
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
       
      </Container>
    </Navbar>
  );
}
