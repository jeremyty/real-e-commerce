import { Image } from "react-bootstrap";

export default function Footer() {
  return (
    <div className="d-flex">
        {/* left */}
        <div className="d-flex flex-column" style={{ flex: 1, padding: "20px"}} >
            <h1>WIN SMASH.</h1>
            <p style={{margin: "10px 0px"}}>We believe every feather supports the dream of all the shuttlers. And all the shuttler share the same love for badminton. That&apos;s what has made who we are today.</p>
            <div className="d-flex">
                <div className="d-flex align-items-center justify-content-center" 
                style={{width: '40px', height: '40px'}}>
                    <i className="bi bi-facebook"/>
                </div>
                <div className="d-flex align-items-center justify-content-center" 
                style={{width: '40px', height: '40px'}}>
                    <i className="bi bi-twitter"/>
                </div>
                <div className="d-flex align-items-center justify-content-center" 
                style={{width: '40px', height: '40px'}}>
                    <i className="bi bi-instagram"/>
                </div>
            </div>
        </div>
        {/* center */}
        <div style={{flex: 1, padding: '20px'}}>
            <h3 style={{marginBottom: "30px"}}>Useful Links</h3>
            <ul className="d-flex flex-wrap" 
            style={{margin: 0, padding: 0, listStyle: "none", marginBottom: "90px"}}>
                <li style={{width: "50%", marginBottom: '10px'}}>Home</li>
                <li style={{width: "50%", marginBottom: '10px'}}>Cart</li>
                <li style={{width: "50%", marginBottom: '10px'}}>Accessories</li>
                <li style={{width: "50%", marginBottom: '10px'}}>My Account</li>
                <li style={{width: "50%", marginBottom: '10px'}}>Wishlist</li>
                <li style={{width: "50%", marginBottom: '10px'}}>Terms & Conditions</li>
            </ul>

            <p style={{fontSize: "12px"}}>&copy; 2023 WinSmash.  All rights reserved</p>
        </div>
        {/* right */}
        <div style={{flex: 1, padding: '20px'}}>
            <h3 style={{marginBottom: "20px"}}>Contact Us</h3>
            <div className="d-flex align-items-center" style={{marginBottom: "10px"}}>
                <i className="bi bi-geo-alt" style={{marginRight: "10px"}}/> L3-205 & 206,  IOI City Mall, IOI Resort City, 62502 Putrajaya, Selangor
            </div>
            <div className="d-flex align-items-center" style={{marginBottom: "10px"}}>
                <i className="bi bi-telephone" style={{marginRight: "10px"}}/> +603 2345 6677
            </div>
            <div className="d-flex align-items-center" style={{marginBottom: "20px"}}>
                <i className="bi bi-envelope-open" style={{marginRight: "10px"}}/> contact@winsmash.com 
            </div>
            <Image src="https://i.ibb.co/1fDjBwG/magfit-c8df76f5-c2a1-489e-8ff6-b389762693bc-800x-removebg-preview.png" 
            style={{width: "50%"}}/>
        </div>

    </div>
    
  )
}
