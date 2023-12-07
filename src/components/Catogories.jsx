import { Button, Image } from "react-bootstrap";
import { categories } from "../data";

export default function Catogories() {
  return (
    <div className="d-flex justify-content-space-between" style={{ padding: "20px"}}>
      {categories.map((item) => (
        //parent position relative
        <div key={item.id} className="position-relative" 
        style={{flex: 1, margin: "3px", height: "70vh"}}>
          <Image style={{width: "100%", height: "100%", objectFit: "cover"}} 
          src={item.img} />
          <div className="position-absolute d-flex flex-column align-items-center justify-content-center" 
          style={{top: 0, left: 0, width: "100%", height: "100%"}}>
            <h1 style={{color: "white", marginBottom: "20px", fontSize: "50px"}}>{item.title}</h1>
            <Button variant="light" style={{fontWeight: 600}}>SHOP NOW</Button>
          </div>
        </div>
      ))}
    </div>
  )
}
