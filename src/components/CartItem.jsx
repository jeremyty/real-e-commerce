import { Button, Card, Col, Row } from "react-bootstrap";
import { useState } from "react";
import UpdateNicknameModal from "./UpdateNicknameModal";
import DeleteItemModal from "./DeleteItemModal";

export default function CartItem({ item, itemId }) {
  const { nickname } = item;
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const handleShowDeleteModal = () => setShowDeleteModal(true);
  const handleShowUpdateModal = () => setShowUpdateModal(true);

  const handleClose = () => {
    setShowUpdateModal(false);
    setShowDeleteModal(false);
  };

  return (
    <Card className="mb-2">
      <Card.Body>
        <Row>
          <Col xs={4} md={3}>
            <Card.Img variant="top" src={item.img} alt={item.name} />
          </Col>
          <Col xs={8} md={6}>
            <Card.Title>
              {item.amount} x {item.name}
            </Card.Title>
            <Card.Text>Custom printing: {item.nickname}</Card.Text>
            <Card.Text>Price: {item.price}</Card.Text>
            <Card.Text>Product ID: {item.productid}</Card.Text>
            <Button
              variant="outline-success"
              style={{ marginRight: "10px" }}
              onClick={handleShowUpdateModal}
            >
              <i className="bi bi-pencil-square"></i>
            </Button>
            <Button variant="outline-danger" onClick={handleShowDeleteModal}>
              <i className="bi bi-trash"></i>
            </Button>
            <UpdateNicknameModal
              show={showUpdateModal}
              handleClose={handleClose}
              item={item}
              itemId={itemId}
              originalNickname={nickname}
            />
            <DeleteItemModal
              show={showDeleteModal}
              handleClose={handleClose}
              itemId={itemId}
            />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
