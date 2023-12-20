import { Button, Col, Container, Row } from "react-bootstrap";
import { CheckCircleFill } from "react-bootstrap-icons";

export default function SuccessPage() {
  return (
    <Container className="py-5 text-center">
      <Row>
        <Col>
          <CheckCircleFill
            style={{ fontSize: "48px", color: "green", marginBottom: "20px" }}
          />
          <h1 style={{ marginBottom: "20px" }}>Thank You for Your Purchase!</h1>
          <p>Your order has been successfully placed.</p>
          <p>Order Number: #123456</p>
          <Button variant="dark" href="/">
            Back to home page
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
