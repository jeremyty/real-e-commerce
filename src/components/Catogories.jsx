import { Button, Image } from "react-bootstrap";
import { categories } from "../data";
import { useNavigate } from "react-router-dom";

export default function Catogories() {
  const navigate = useNavigate();
  const toShop = () => {
    navigate("/pl")
  }

  return (
    <div className="d-flex justify-content-space-between" style={{ padding: "10px" }}>
      {categories.map((item) => (
       // Parent position relative
      <div
        key={item.id}
        className="position-relative"
        style={{
          flex: 1,
          margin: "1px",
          height: "40vh", 
          maxHeight: "500px",
        }}
      >
        <Image
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src={item.img}
          alt={item.title}
        />
        <div
          className="position-absolute d-flex flex-column align-items-center justify-content-center"
          style={{ top: 0, left: 0, width: "100%", height: "100%" }}
        >
          <h1
            style={{
              color: "white",
              marginBottom: "10px", 
              fontSize: "3.5vw", 
            }}
          >
            {item.title}
          </h1>
          <Button variant="light" 
          style={{ fontWeight: 500, fontSize: "1.5vw" }}
          onClick={toShop}>
            SHOP NOW
          </Button>
        </div>
      </div>
    ))}

    </div>
  )
}
