import { Button, Col, Form, Row } from "react-bootstrap";
import {
  getAuth,
  signInWithEmailAndPassword,
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../components/AuthProvider";


export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const provider = new GoogleAuthProvider();
  const provider2 = new FacebookAuthProvider();

  useEffect(() => {
    if (currentUser) {
      navigate("/profile");
    }
  }, [currentUser, navigate]);


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, username, password);
    } catch (error) {
      console.error(error);
    }
  };

  const handleGoogleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error(error)
    }
  }

  const handleFacebookLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithPopup(auth, provider2);
    } catch (error) {
      console.error(error)
    }
  }


  return (
    <Row>
      <Col className="my-5 d-grid gap-3 justify-content-center text-center px-5">
        <h1 style={{ fontSize: 40 }}>Login</h1>

        <Button className="rounded-pill" variant="success" onClick={handleGoogleLogin}>
          <i className="bi bi-google"
            style={{ marginRight: "5px" }} /> Sign up with Google
        </Button>
        <Button className="rounded-pill" variant="primary" onClick={handleFacebookLogin}>
          <i className="bi bi-facebook"
            style={{ marginRight: "5px" }} /> Sign up with Facebook
        </Button>
        <p className="text-center">or</p>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Label >
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
          <Button className="rounded-pill" variant="outline-dark" type="submit">
            Sign in
          </Button>
        </Form>
      </Col>
    </Row>
  )
}
