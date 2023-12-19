import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider";
import Footer from "../components/Footer";
import { Button, Col, Form, Row } from "react-bootstrap";
import NavBarr from "../components/NavBarr";
import Announcement from "../components/Announcement";
import { useDispatch } from "react-redux";
import { insertUser } from "../feature/cart/userSlice";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (currentUser) {
      dispatch(insertUser(currentUser));
      navigate("/profile");
    }
  }, [dispatch, currentUser, navigate]);

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        username,
        password
      );
      const user = res.user;
      setUser(user);
      // Use user information as needed
      console.log("User ID:", user.uid);
      console.log("User Email:", user.email);
      console.log("User Name:", user.displayName);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Announcement />
      <NavBarr />

      <Row style={{ backgroundColor: "#F8F9F9" }}>
        <Col className="my-5 d-grid gap-4 justify-content-center text-center px-5">
          <h1 style={{ fontSize: 40 }}>Registration</h1>
          <Form onSubmit={handleSignUp}>
            <Form.Group className="mb-2" controlId="formBasicEmail">
              <Form.Label>
                <i className="bi bi-envelope-fill"></i>
              </Form.Label>
              <Form.Control
                onChange={(e) => setUsername(e.target.value)}
                type="email"
                placeholder="Email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                <i className="bi bi-lock-fill"></i>
              </Form.Label>
              <Form.Control
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check style={{ fontSize: "10px", margin: "20px 10px" }}>
                <Form.Check.Input type="checkbox" required />
                <Form.Check.Label>
                  By creating an account, I consent to the processing of my
                  personal data in accordance with the <b>PRIVACY POLICY</b>
                </Form.Check.Label>
              </Form.Check>
            </Form.Group>
            <Button
              className="rounded-pill"
              variant="outline-dark"
              type="submit"
            >
              Register
            </Button>
          </Form>
        </Col>
      </Row>
      <Footer />
    </>
  );
}
