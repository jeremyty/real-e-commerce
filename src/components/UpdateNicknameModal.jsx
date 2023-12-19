import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateNickname } from "../feature/cart/cartSlice";
import { Button, Form, Modal, Row } from "react-bootstrap";

export default function UpdateNicknameModal({
  show,
  handleClose,
  itemId,
  originalNickname,
}) {
  const [newNickname, setNewNickname] = useState(originalNickname);

  const dispatch = useDispatch();

  const handleUpdate = () => {
    handleClose();
    setTimeout(() => {
      dispatch(updateNickname({ itemId, newNickname }));
      alert("Nickname updated successfully!");
    }, 300);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>Enter your nickname</Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <div className="col-md-6">
                <Form.Group controlId="nickname">
                  <Form.Control
                    defaultValue={originalNickname}
                    as="textarea"
                    placeholder="New nickname"
                    rows={2}
                    onChange={(e) => setNewNickname(e.target.value)}
                  />
                </Form.Group>
              </div>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="dark"
            className="rounded-pill"
            onClick={handleUpdate}
          >
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
