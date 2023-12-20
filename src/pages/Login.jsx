import { Alert, Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import {
  getAuth,
  signInWithEmailAndPassword,
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../components/AuthProvider";
import Announcement from "../components/Announcement";
import NavBarr from "../components/NavBarr";
import Footer from "../components/Footer";
import { useDispatch } from "react-redux";
import { EyeFill, EyeSlashFill } from "react-bootstrap-icons";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const provider2 = new FacebookAuthProvider();
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (currentUser) {
      navigate("/profile");
    }
  }, [dispatch, currentUser, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        username,
        password
      );
      const user = userCredential.user;
      setUser(user);
      console.log("User ID:", user.uid);
      console.log("User Email:", user.email);
    } catch (error) {
      setLoginError("Unable to login. Please check your email or password.");
      console.error(error);
      setTimeout(() => {
        setLoginError("");
      }, 2000);
    }
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    if (newPassword.length < 6) {
      setPasswordError("Password must be at least 6 characters.");
    } else {
      setPasswordError("");
    }
    setTimeout(() => {
      setPasswordError("");
    }, 2000);
  };

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const handleFacebookLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithPopup(auth, provider2);
      const user = userCredential.user;
      setUser(user);
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
        <Col className="my-5 d-grid gap-3 justify-content-center text-center px-5">
          <h1 style={{ fontSize: 40 }}>Login</h1>

          <Button
            className="rounded-pill"
            variant="success"
            onClick={handleGoogleLogin}
          >
            <i className="bi bi-google" style={{ marginRight: "5px" }} />{" "}
            Continue with Google
          </Button>
          <Button
            className="rounded-pill"
            variant="primary"
            onClick={handleFacebookLogin}
          >
            <i className="bi bi-facebook" style={{ marginRight: "5px" }} />{" "}
            Continue with Facebook
          </Button>
          <p className="text-center">or</p>
          <Form onSubmit={handleLogin}>
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

            <Form.Group controlId="formBasicPassword">
              <Form.Label>
                <i className="bi bi-lock-fill"></i>
              </Form.Label>
              <InputGroup>
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
                <Button
                  variant="outline-secondary"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeSlashFill /> : <EyeFill />}
                </Button>
              </InputGroup>

              {passwordError && <Alert variant="danger">{passwordError}</Alert>}
              {loginError && <Alert variant="danger">{loginError}</Alert>}
            </Form.Group>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Alert.Link style={{ margin: "20px 45px", fontSize: "11px" }}>
                FORGOT YOUR PASSWORD?
              </Alert.Link>
              <Button
                className="rounded-pill"
                variant="outline-dark"
                type="submit"
                onClick={() => setShowPassword(!showPassword)}
              >
                Sign in
              </Button>

              <Alert.Link
                href="register"
                style={{ margin: "10px 0px", fontSize: "12px" }}
              >
                Create Account
              </Alert.Link>
            </div>
          </Form>
        </Col>
      </Row>
      <Footer />
    </>
  );
}
