import { Link } from "react-router-dom";
import { stripHtml } from "string-strip-html";
import '../../styles/ProductCard.css'

function ProductCard(props) {

  console.log("Productcard productlist :",props)
  var prod=props.product;
  const { result } = stripHtml(prod.description);

  return (
    <div className="card mt-3 mb-2 h100 border border-secondary-subtle productCard" style={{width: '17rem'}}>
      <div className="productImgContainer">
      <img src={prod.image.url} className="card-img-top productImg mb-1" height={200} alt="img" /></div>
      <div className="card-body">
        <h5 className="card-title mb-2 text-center text-dark">{prod.name.substring(0,5)}</h5>
        <Link to={"/products/"+prod.id} className="card-text mb-0 text-dark description" style={{textDecoration:"none"}} >
         {result.substring(0,50)}
        </Link>
        <p><span className="price_symbol">₹</span><span className="product_Price text-dark">{prod.price.raw}</span> M.R.P.</p>
        
      </div>
    </div>
  );
}

export default ProductCard;
