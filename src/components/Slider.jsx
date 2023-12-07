import { Button, Image } from "react-bootstrap";
import { sliderItems } from "../data";
import { useState } from "react";

export default function Slider() {

  const [slideIndex, setSlideIndex] = useState(0);
  const handleLeftClick = () => {
    setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
  };
  
  const handleRightClick = () => {
    setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
  };
  
  
  return (
    <div className="d-flex position-relative" style={{ width: "100%", height: "100vh", overflow: "hidden" }}>
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
          <div key={item.id} className="d-flex align-items-center" style={{ width: "100vw", height: "100vh", backgroundColor: `#${item.bg}` }}>
            <div style={{ flex: 1, height: "100%" }}>
              <Image style={{ height: "80%" }} src={item.img} />
            </div>
            <div style={{ flex: 1, padding: "50px" }}>
              <h1 style={{ fontSize: "70px" }}>{item.title}</h1>
              <p style={{ margin: "50px 0px", fontSize: "30px", fontWeight: 500, letterSpacing: "3px" }}>{item.desc}</p>
              <Button variant="outline-dark" style={{ padding: "10px", fontSize: "20px" }}>SHOP NOW</Button>
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
