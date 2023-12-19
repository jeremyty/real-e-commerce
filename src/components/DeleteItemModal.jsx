import { useDispatch } from "react-redux";
import { deleteCartItem } from "../feature/cart/cartSlice";
import { Button, Modal } from "react-bootstrap";

export default function DeleteItemModal({ show, handleClose, itemId }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    handleClose();
    setTimeout(() => {
      dispatch(deleteCartItem(itemId));
      alert("Item removed successfully!");
    }, 300);
  };

  return (
    <Modal show={show} onHide={handleClose} size="md">
      <Modal.Header closeButton>
        <Modal.Title>Confirm Remove</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to remove this item?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          No
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
