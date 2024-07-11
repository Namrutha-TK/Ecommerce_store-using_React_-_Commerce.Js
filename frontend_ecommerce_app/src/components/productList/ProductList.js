import { useState,useEffect } from "react";
import commerce from '../../lib/commerce';
import ProductCard from "../productCard/ProductCard";

const ProductList = (props) => {
 const [products,setProducts]=useState([]);
async function getAllProducts(){
   try { 
    var productResponse=await fetch("https://api.chec.io/v1/products?limit=25" ,{
    method:'GET',
    headers:{
      'X-Authorization':'pk_57592c1e01d9e7ca56c01e13ca575289117a34ebef2b2'
    }
  });
  var data=await productResponse.json()
  console.log(productResponse);
  setProducts(data.data);
  
}catch (error) {
  console.error('Error fetching products:', error);
}
}
useEffect(()=>{
    getAllProducts();
},[])
console.log(products);
    return ( 
        <div className="container " >
          <div className="row bg-light">
        {products.map((p ) => (
         <div key={p.id} className="col-md-3 mb-4"> 
            <ProductCard  product={p}  />
          </div>
        )    
         )}     
         </div>
        </div>
     );
}
 
export default ProductList;