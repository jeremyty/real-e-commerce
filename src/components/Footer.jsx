import { Col, Image, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <Row className="d-flex">
      {/* left */}
      <Col md={4} style={{ padding: "20px" }}>
        <h1>WIN SMASH.</h1>
        <p style={{ margin: "10px 0px" }}>
          We believe every feather supports the dream of all the shuttlers. And
          all the shuttler share the same love for badminton. That&apos;s what
          has made who we are today.
        </p>
        <div className="d-flex">
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ width: "40px", height: "40px" }}
          >
            <i className="bi bi-facebook" />
          </div>
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ width: "40px", height: "40px" }}
          >
            <i className="bi bi-twitter" />
          </div>
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ width: "40px", height: "40px" }}
          >
            <i className="bi bi-instagram" />
          </div>
        </div>
      </Col>
      {/* center */}
      <Col md={4} style={{ padding: "20px" }}>
        <h3 style={{ marginBottom: "30px" }}>Useful Links</h3>
        <ul
          className="d-flex flex-wrap"
          style={{
            margin: 0,
            padding: 0,
            listStyle: "none",
          }}
        >
          <li
            className="col-10 col-sm-8 col-md-6"
            style={{ marginBottom: "10px", textDecoration: "underline" }}
          >
            Home
          </li>
          <li
            className="col-10 col-sm-8 col-md-6"
            style={{ marginBottom: "10px", textDecoration: "underline" }}
          >
            Cart
          </li>
          <li
            className="col-10 col-sm-8 col-md-6"
            style={{ marginBottom: "10px", textDecoration: "underline" }}
          >
            Accessories
          </li>
          <li
            className="col-10 col-sm-8 col-md-6"
            style={{ marginBottom: "10px", textDecoration: "underline" }}
          >
            My Account
          </li>
          <li
            className="col-10 col-sm-8 col-md-6"
            style={{ marginBottom: "10px", textDecoration: "underline" }}
          >
            Wishlist
          </li>
          <li
            className="col-10 col-sm-8 col-md-6"
            style={{ marginBottom: "10px", textDecoration: "underline" }}
          >
            Terms & Conditions
          </li>
        </ul>
      </Col>
      {/* right */}
      <Col md={4} style={{ padding: "20px" }}>
        <h3 style={{ marginBottom: "20px" }}>Contact Us</h3>
        <div
          className="d-flex align-items-center"
          style={{ marginBottom: "10px" }}
        >
          <i className="bi bi-geo-alt" style={{ marginRight: "10px" }} /> L3-205
          & 206, IOI City Mall, IOI Resort City, 62502 Putrajaya, Selangor
        </div>
        <div
          className="d-flex align-items-center"
          style={{ marginBottom: "10px" }}
        >
          <i className="bi bi-telephone" style={{ marginRight: "10px" }} /> +603
          2345 6677
        </div>
        <div
          className="d-flex align-items-center"
          style={{ marginBottom: "30px" }}
        >
          <i className="bi bi-envelope-open" style={{ marginRight: "10px" }} />{" "}
          contact@winsmash.com
        </div>
        <Image
          src="https://zomaxmalaysia.com.my/image/zomaxmy/image/data/fxHQdqeY1627979559.png"
          style={{ width: "50%", marginBottom: "80px" }}
        />

        <p style={{ fontSize: "12px" }}>
          &copy; 2023 WinSmash. All rights reserved
        </p>
      </Col>
    </Row>
  );
}
