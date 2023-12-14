import { Button } from "react-bootstrap";
import { sliderItems } from "../data";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Slider() {

  const navigate = useNavigate();
  const [slideIndex, setSlideIndex] = useState(0);
  const handleLeftClick = () => {
    setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
  };
  
  const handleRightClick = () => {
    setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
  };

  const toShop = () => {
    navigate("/pl")
  }


  
  return (
    <div className="d-flex position-relative " 
    style={{ width: "100%", height: "100vh", overflow: "hidden" }}>
      <div style={{ cursor: "pointer" }}>
        <div
          className="position-absolute d-flex m-auto"
          style={{ left: "10px", top: "50%", transform: "translateY(-50%)", backgroundColor: "darkgrey", opacity: 0.5, zIndex: 2 }}
          onClick={handleLeftClick}
        >
          <i className="bi bi-caret-left-fill"></i>
        </div>
      </div>

      <div className="d-flex" style={{ height: "100%", transform: `translateX(${slideIndex * -100}vw)`, transition: "all 1.5s ease" }}>
        {sliderItems.map((item) => (
          <div
            key={item.id}
            className="d-flex align-items-center justify-content-center"
            style={{
              width: "100vw",
              height: "100vh",
              backgroundImage: `url(${item.img})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              //backgroundRepeat: "no-repeat"
            }}
          >
            <div className="d-flex flex-column text-center align-items-center justify-content-center">
              <div style={{ width: "100%", maxWidth: "800px", backgroundColor: "rgba(255,255,255,0.4)", padding: "20px", color: "#1C2833" }}>
                <h2 style={{ fontSize: "4.5vw", marginBottom: "20px" }}>{item.title}</h2>
                <p style={{ fontSize: "3.5vw", marginBottom: "20px", fontWeight: 400 }}>
                  {item.desc}
                </p>
                <Button
                  variant="dark"
                  style={{ padding: "10px 15px", fontSize: "2vw" }}
                  onClick={toShop}
                >
                  SHOP NOW
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>




      <div style={{ cursor: "pointer" }}>
        <div
          className="position-absolute d-flex m-auto"
          style={{ right: "10px", top: "50%", transform: "translateY(-50%)", backgroundColor: "darkgrey", opacity: 0.5, zIndex: 2 }}
          onClick={handleRightClick}
        >
          <i className="bi bi-caret-right-fill"></i>
        </div>
      </div>
    </div>
  );
}
