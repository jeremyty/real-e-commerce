import { Button, Image } from "react-bootstrap";
import { categories } from "../data";

export default function Catogories() {

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
          height: "40vh", // Adjust the height for responsiveness
          maxHeight: "500px", // Maximum height for the items
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
              marginBottom: "10px", // Adjusted margin for smaller screens
              fontSize: "3.5vw", // Responsive font size based on viewport width
            }}
          >
            {item.title}
          </h1>
          <Button variant="light" style={{ fontWeight: 500, fontSize: "1.5vw" }}>
            SHOP NOW
          </Button>
        </div>
      </div>
    ))}

    </div>
  )
}
