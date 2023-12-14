import { Button, Card, Col, Row } from "react-bootstrap";

export default function CartItem({item}) {
  return (
    <Card className="mb-2">
            <Card.Body>
                <Row>
                    <Col xs={4} md={2}>
                        <Card.Img
                        variant="top"
                        src={item.img}
                        alt={item.name}
                        />
                    </Col>
                    <Col xs={8} md={6}>
                        <Card.Title>
                            {item.amount} x {item.name}</Card.Title>
                        <Card.Text>Product ID: {item.productid}</Card.Text>
                        <Button variant="outline-success" 
                        style={{marginRight: "10px"}}>
                            <i className="bi bi-pencil-square"></i>
                        </Button>
                        <Button variant="outline-danger">
                             <i className="bi bi-trash"></i>
                        </Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
  )
}
