import { Badge } from "@mui/material";
import { Container, Form, Image, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function NavBarr() {
  const logo = "https://rb.gy/v00p0y";
  const navigate = useNavigate();
  const toLogin = async (e) => {
    e.preventDefault();
    navigate("/login")
  }

  return (
    <Navbar expand="lg" className="bg-body-secondary">
      <Container className="d-flex align-items-center">
        <Nav.Link className="me-3">
          EN
        </Nav.Link>
        <Form className="position-relative">
          <Form.Control
            //type= "Search"
            placeholder="Search"
            className="me-1 pr-4"
            aria-label= "Search"
            style={{ fontSize: '12px' }}
          />
          <i className="bi bi-search position-absolute" 
          style={{ right: '10px', top: '50%', transform: 'translateY(-50%)' }}></i>
        </Form>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav.Link href="home" className="d-flex align-items-center justify-content-center m-auto">
            <Image src={logo} alt="badminton Logo" roundedCircle style={{ width: 65 }} />
          </Nav.Link>
          <Nav className="ms-5">
            
            <Nav.Link onClick={toLogin}>
              <i className="bi bi-person" style={{fontSize: "20px"}}/>
            </Nav.Link>
            <Nav.Link>
              <Badge badgeContent={4} color="primary">
                <i className="bi bi-cart3"></i>
              </Badge>
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

