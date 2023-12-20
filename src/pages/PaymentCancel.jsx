import { Button, Col, Container, Row } from "react-bootstrap";
import { ExclamationTriangleFill } from "react-bootstrap-icons";

export default function PaymentCancel() {
  return (
    <Container className="py-5 text-center">
      <Row>
        <Col>
          <ExclamationTriangleFill
            style={{ fontSize: "3rem", color: "red", marginBottom: "20px" }}
          />
          <h1 style={{ marginBottom: "20px" }}>Payment Cancelled</h1>
          <p style={{ marginBottom: "20px" }}>
            Forgot to add something to your cart? Shop around then come back to
            pay!
          </p>
          <Button variant="outline-dark" href="/pl">
            Continue Shopping
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
