import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { AuthContext } from "../components/AuthProvider";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import NavBarr from "../components/NavBarr";

export default function Profile() {
  const auth = getAuth();
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const storage = getStorage();

  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  if (!currentUser) {
    navigate("/");
  }

  const handleImageUpload = async () => {
    if (!currentUser) {
      alert("Please sign in to upload an image.");
      return;
    }

    if (image) {
      try {
        const storageRef = ref(
          storage,
          `profileImages/${currentUser.uid}/${image.name}`
        );
        await uploadBytes(storageRef, image);
        const downloadURL = await getDownloadURL(storageRef);
        setImageUrl(downloadURL);
        setIsEditing(false);

        // Save image URL to localStorage
        localStorage.setItem("profileImage", downloadURL);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  useEffect(() => {
    const storedImageUrl = localStorage.getItem("profileImage");
    if (storedImageUrl) {
      setImageUrl(storedImageUrl);
    }
  }, []);

  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <>
      <NavBarr />
      <Container className="py-4">
        <Row>
          <Col md={4}>
            <div className="d-flex flex-column align-items-center">
              {currentUser ? (
                <>
                  <div className="mb-3">
                    {imageUrl ? (
                      <Image
                        src={imageUrl}
                        alt="Profile"
                        fluid
                        roundedCircle
                        style={{ width: "200px", height: "200px" }}
                      />
                    ) : (
                      <div
                        className="bg-secondary rounded-circle text-light d-flex justify-content-center align-items-center"
                        style={{ width: "200px", height: "200px" }}
                      >
                        <i className="bi bi-person fs-1"></i>
                      </div>
                    )}
                  </div>
                  {isEditing ? (
                    <>
                      <input
                        type="file"
                        className="form-control mb-3"
                        onChange={handleImageChange}
                      />
                      <Button onClick={handleImageUpload} className="mb-3">
                        Upload Image
                      </Button>
                    </>
                  ) : (
                    <Button
                      onClick={() => setIsEditing(true)}
                      className="mb-3"
                      variant="primary"
                    >
                      Edit Profile Picture
                    </Button>
                  )}
                  <p className="text-center" style={{ fontSize: "18px" }}>
                    <b>Welcome,</b>{" "}
                    {currentUser.displayName || currentUser.email}!
                  </p>
                </>
              ) : (
                <Button>Sign In with Google</Button>
              )}
            </div>
          </Col>
          <Col md={8}>
            {currentUser && (
              <div>
                <h2>{currentUser.displayName || currentUser.email}</h2>
                <p>About: I am a badminton fan!</p>
                <Button variant="danger" onClick={handleLogout}>
                  Logout
                </Button>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}
