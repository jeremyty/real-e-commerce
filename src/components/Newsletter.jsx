import { Button, Form } from "react-bootstrap";

export default function Newsletter() {
  return (
      <div
        className="d-flex align-items-center justify-content-center flex-column"
        style={{ height: "35vh", backgroundColor: "#454545" }}
      >
        <h1
          style={{
            fontSize: "2.5vw", 
            marginBottom: "20px",
            color: "white",
          }}
        >
          Get timely updates from your favourite products.
        </h1>

        <div
          className="d-flex"
          style={{ width: "50%", maxWidth: "500px", margin: "0 auto" }}
        >
          <Form.Control
            type="email"
            placeholder="Enter your email address"
            className="me-1"
            controlId="formBasicEmail"
            style={{ fontSize: "1.5vw", flex: "1" }} 
          />
          <Button variant="light" style={{ fontSize: "1.5vw" }}> 
            <i className="bi bi-send-fill"/>
          </Button>
        </div>
      </div>

        )
      }
