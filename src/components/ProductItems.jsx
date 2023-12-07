import Product from "./Product";
import { popularProducts } from "../data";

export default function ProductItems() {
  return (
    <div className="d-flex justify-content-space-between flex-wrap" 
    style={{padding: "20px"}}>
        {popularProducts.map((item) => (
            <Product item={item} key={item.id} />
        ))}
    </div>
  )
}
