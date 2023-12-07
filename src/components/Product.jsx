import { Image } from "react-bootstrap";


export default function Product({ item }) {
  return (
    <div className="d-flex position-relative justify-content-center align-items-center container" 
    style={{flex: 1, margin: "5px", minWidth: "280px", height: "350px", backgroundColor: "#F8F9F9"}}>
        <div className="position-absolute" 
        style={{width: "200px", height: "200px", borderRadius: "50%", backgroundColor: "white"}}/>
        <Image src={item.img} style={{height: "75%", zIndex: 2}} />
        {/* info */}
        <div className="position-absolute d-flex align-items-center justify-content-center info" 
        style={{width: "100%", height: "100%", top: 0, left: 0, zIndex: 3, backgroundColor: "rgba(0, 0, 0, 0.2)", transition: "all 0.5s ease", cursor: "pointer"}}>
            {/* icon */}
            <div className="d-flex align-items-center justify-content-center icon"
            style={{width: "40px", height: "40px", borderRadius: '50%', margin: "10px", transition: "all 0.5s ease", backgroundColor: "white" }}>
                <i className="bi bi-cart2"/>
            </div>
            <div className="d-flex align-items-center justify-content-center icon" 
            style={{width: "40px", height: "40px", borderRadius: '50%', margin: "10px", transition: "all 0.5s ease", backgroundColor: "white" }}>
               <i className="bi bi-search"/>
            </div>
            <div className="d-flex align-items-center justify-content-center icon" 
            style={{width: "40px", height: "40px", borderRadius: '50%', margin: "10px", transition: "all 0.5s ease", backgroundColor: "white" }}>
               <i className="bi bi-heart"/>
            </div>
        </div>
    </div>
  )
}