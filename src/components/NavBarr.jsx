import { Badge } from "@mui/material";
import { Container, Form, Image, Nav, Navbar } from "react-bootstrap";

export default function NavBarr() {
  const logo = "https://rb.gy/v00p0y";

  return (
    <Navbar expand="lg" className="bg-body-secondary">
      <Container className="d-flex" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Nav.Link className="me-4">
          EN
        </Nav.Link>
        <Form className="position-relative">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2 pr-4"
            aria-label="Search"
            style={{ fontSize: '11px' }}
          />
          <i className="bi bi-search position-absolute" style={{ right: '10px', top: '50%', transform: 'translateY(-50%)' }}></i>
        </Form>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav.Link href="home" style={{ textAlign: 'center', margin: '0 auto' }}>
            <Image src={logo} alt="badminton Logo" roundedCircle style={{ width: 65 }} />
          </Nav.Link>
          <Nav className="ms-4">
            <Nav.Link>Register</Nav.Link>
            <Nav.Link>Sign In</Nav.Link>
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

