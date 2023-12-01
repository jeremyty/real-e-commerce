
export default function Slider() {
  return (
    <div className="d-flex position-relative" 
    style={{width: "100%", height: "100vh" }}>

        <div className="m-auto d-flex position-absolute align-items-center justify-content-center" 
        style={{width: "50px", 
        height: "50px", 
        backgroundColor: "grey", 
        top: 0, bottom: 0,  
        borderRadius: "50%"}}>
            <div>
                <i className="bi bi-caret-left-fill"></i>
            </div>
            <div>
                <i className="bi bi-caret-right-fill"></i>
            </div>
        </div>

        

    </div>
  )
}
