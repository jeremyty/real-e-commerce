import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { AuthContext } from "../components/AuthProvider";
import { Button, Container } from "react-bootstrap";


export default function Profile() {

    const auth = getAuth();
    const navigate = useNavigate();
    const { currentUser } = useContext(AuthContext);

      if(!currentUser) {
          navigate("*");
      }
   
    const handleLogout = () => {
      auth.signOut();
    };


  return (
    <Container className="d-flex py-2">
        <h1 className="me-2">Profile</h1>
        <Button>
            <i
            className="bi bi-door-closed"
            onClick={handleLogout}
            />
        </Button>
        
    </Container>
    
  )
}
