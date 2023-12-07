import { Button, Form } from "react-bootstrap";

export default function Newsletter() {
  return (
    <div className="d-flex align-items-center justify-content-center flex-column" 
    style={{height: "40vh", backgroundColor: "#FDF2E9"}}>
        <h1 style={{fontSize: "30px", marginBottom: "20px"}}>Get timely updates from your favourite products.</h1>
        
       <div className="d-flex" style={{width: "50%" , height: "40px"}}>
        <Form.Control
            type="email"
            placeholder="Enter your email address"
            className="me-1"
            controlId="formBasicEmail"
            style={{ fontSize: '14px' }}
          />
         <Button variant="dark">
            <i className="bi bi-send-fill"></i>
        </Button>
       </div>
    </div>
  )
}
