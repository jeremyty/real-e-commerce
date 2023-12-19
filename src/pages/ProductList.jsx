import { Form } from "react-bootstrap";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import NavBarr from "../components/NavBarr";
import Newsletter from "../components/Newsletter";
import ProductItems from "../components/ProductItems";

export default function ProductList() {
  return (
    <div>
      <NavBarr />
      <Announcement />
      <h1 style={{ margin: "20px" }}>Popular Products</h1>
      <div className="d-flex justify-content-between">
        <div style={{ margin: "20px" }}>
          <span
            style={{ fontSize: "20px", fontWeight: 600, marginRight: "20px" }}
          >
            Filter products:
          </span>
          <Form.Select
            aria-label="Default select example"
            style={{ padding: "10px" }}
          >
            <option defaultValue disabled>
              Brand
            </option>
            <option>Yonex</option>
            <option>Victor</option>
            <option>Li-Ning</option>
          </Form.Select>
        </div>
        <div style={{ margin: "20px" }}>
          <span
            style={{ fontSize: "20px", fontWeight: 600, marginRight: "20px" }}
          >
            Sort products:
          </span>
          <Form.Select
            aria-label="Default select example"
            style={{ padding: "10px" }}
          >
            <option defaultValue>Newest</option>
            <option>Price (asc)</option>
            <option>Price (desc)</option>
          </Form.Select>
        </div>
      </div>
      <ProductItems />
      <Newsletter />
      <Footer />
    </div>
  );
}
