import Catogories from "../components/Catogories";
import Navbar from "../components/NavBarr";
import Slider from "../components/Slider";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Announcement />
      <Navbar />
      <Slider />
      <Catogories/>
      <Newsletter />
      <Footer />
    </>
    
  )
}
