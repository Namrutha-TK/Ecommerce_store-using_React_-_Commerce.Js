import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import propType from 'prop-types'
import { stripHtml } from "string-strip-html";
import '../styles/ProductDetail.css'

const ProductDetail = (props) => {

    const params=useParams();
    const prodId=params.productId;
    const[product,setProduct]=useState({});
    console.log("product id :",prodId);
  async  function loadProductsById(){
        try { 
             var productResponse= await fetch("https://api.chec.io/v1/products/"+prodId,{
           method:'GET',
            headers:{
              'X-Authorization':'pk_57592c1e01d9e7ca56c01e13ca575289117a34ebef2b2'
           }
          });
           var data=await productResponse.json()
           setProduct(data);
         }catch (error) {
           console.error('Error fetching products:', error);
         }
        
       }
useEffect(()=>{
    loadProductsById();
},[prodId])
console.log("product",product)
 // const { result } = stripHtml(product.description);

   const handleAddToCart = ()=>{
    if (product && product.id) {
       props.handleAddToCart(product.id,1);
    }
    else {
      console.error('Product or product ID is not available.');
    }
   }

    return ( 
        <div className="container-fluid mb-4 gap-2 pt-5">
        
         <div className="productDetails d-flex">
          <div className="col-md-4">
            <img 
              src={product && product.image && product.image.url}
            height={400} alt={product.name}/>

          </div>
          <div className="col-md-5">
            <a href="#" className="text-dark text-decoration-none">Visit the&nbsp;
              {product&& product.name && product.name.substring(0,5)} store
               </a>
               <h5>{product&&product.name}</h5>
               <p>100 + bought in past month </p>
             <hr/>
             <p><span className="price_symbol">₹</span><span className="product_Price">
              {product&& product.price&&product.price.formatted} 
              </span> M.R.P.</p>
             <hr/>
             <h6>Product Details</h6>
            <p dangerouslySetInnerHTML={{__html: product.description}}/>
            
          </div>
          <div className="col-md-3 subData border border-1 rounded-2">
          <p><span className="price_symbol">₹</span><span className="product_Price">
            {product&& product.price&&product.price.formatted} 
            </span></p>
           <p><a href="#">Free delivery </a>sunday, 7 july</p> 
           <p>Order within <span className="text-success">12 hrs 2 mins</span></p>
           <a href="#">Details</a>
           <p><i className="bi bi-geo-alt"></i>Delivering to Mumbai 4000001-<br/>Update location</p>
           <p className="text-danger">Only few left in stock</p>
           <p><span >ships from</span>&nbsp;Amazon</p>
           <p><span >sold by</span>&nbsp;<span className="text-prime">Cocoblu Retail</span></p>
           <div className="d-grid gap-2">
           <button type="button" className="btn btn-warning" 
            onClick={handleAddToCart}
           >Add To Cart</button>
          <button type="button" className="btn buynowBtn">Buy Now</button>
          </div>
           <p><i className="bi bi-lock"></i><span>Secure transaction</span></p>
           <div className="form-check">
               <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
               <label className="form-check-label" htmlFor="flexCheckDefault">
                   Add gift options
                   </label>
            </div>
            <hr/>
            <input className="form-control form-control-sm" type="text" placeholder="Add to Wish List" aria-label=".form-control-sm example"></input>

          </div>
        </div> 

        </div>
     );
}
 
export default ProductDetail;