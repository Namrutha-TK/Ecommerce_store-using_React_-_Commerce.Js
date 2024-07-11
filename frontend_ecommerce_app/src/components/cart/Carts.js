import React,{Component,useState,useEffect, useContext} from "react";
import { useNavigate } from "react-router-dom";
import propTypes from 'prop-types';
import CartContext from "../context/CartContext";
import { useCartCount } from "../context/CartCountContext";


 
const Carts=()=>{
   
  const {updateCartCount}=useCartCount();
  const [cartData, setCartData] = useState({});
  var cartId= localStorage.getItem('cartId');

  
    const getCart=async() =>{
        try{const response= await fetch("https://api.chec.io/v1/carts/"+cartId, {
               method: "GET",
               headers: {
                 "X-Authorization": "pk_57592c1e01d9e7ca56c01e13ca575289117a34ebef2b2",
                 Accept: "application/json",
                 "Content-Type": "application/json",
               },
             });
             if (!response.ok) {
               throw new Error('Failed to fetch cart data');
            }
   
           const cartData = await response.json();
           console.log("products in cartData",cartData.line_items);
           setCartData(cartData);
           } catch (error) {
               console.error('Error fetching cart data:', error);
           }
       }
       useEffect(()=>{
        getCart();
       },[])
       const handleRemoveFromCart = async (line_item_id) => {
           const cartId = localStorage.getItem("cartId");
           try {
            const response = await fetch(
               "https://api.chec.io/v1/carts/"+cartId+"/items/"+{line_item_id},
             {
                method: "DELETE",
                 headers: {
                   "X-Authorization":"pk_57592c1e01d9e7ca56c01e13ca575289117a34ebef2b2",
                   "Content-Type": "application/json",
               },
               }
            );
             if (!response.ok) {
               throw new Error("Failed to delete cart item ");
             }
             const data = await response.json();
           updateCartCount(data.total_unique_items);
            setCartData(data);
      
             console.log("Cart item deleted successfully");
          } catch (error) {
            console.error("Error deleteing cart item ", error);
           }
         };

         function handleQuantityChange(productId) {
          var selectElement = document.getElementById("quantitySelect");
          var selectedValue = selectElement.value; 
          var itemId = productId; 
          var quantity = parseInt(selectedValue); 
      
      
          quantityChangeFromCart(itemId, quantity);
      }
         
    const quantityChangeFromCart = async (itemId,quantity) => {
      
      console.log(itemId);
      try {
          const response = await fetch('https://api.chec.io/v1/carts/'+cartId+'/items/'+itemId, {
              method: 'PUT',
              headers: {
                  'X-Authorization':"pk_57592c1e01d9e7ca56c01e13ca575289117a34ebef2b2", 
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  quantity: quantity
              })
          });
  
          if (!response.ok) {
              throw new Error('Failed to change cart item quantity');
          }
          const data=await response.json();
          updateCartCount(data.total_unique_items)
          setCartData(data);
         
  
          console.log('Cart item quantity change successfully');
      } catch (error) {
          console.error('Error changing cart item quantity:', error);
      }
  };
 
       


return(
  <CartContext.Provider value={{
    getCart:cartData,
    handleRemoveFromCart:cartData,
  }}>
  <div className="container-fluid">
    <div className="container mt-4 bg-white">
      <div className="cart_box">
        <div className="row">
          <div className="ml-5 col-md-5">
            <p>Shopping Cart</p>
          </div>
          <div className="price_title col-md-2">
            <p className=" card-text">price</p>
          </div>
          <div className="col md-2 border">

            <p className="justify-content-end">Subtotal : ₹{cartData.subtotal && cartData.subtotal.raw} </p>
            <div className="d-grid gap-2 mb-2">
            <button type="button" className="btn btn-warning " >Proceed to Buy</button></div>
         </div>
        </div>
        <div className="row">
        {cartData.line_items&& cartData.line_items.map((product)=>{
          return(
            <div key={product.id} className="row border border-white">
            <div className="col-md-9">
             
            <div className="card mb-3" style={{maxwidth:"540px"}}>
                     <div className="row g-0">
                <div className="col-md-4">
                <img src={product.image.url} className="img-fluid rounded-start" alt="..."/>
                        </div>
           <div className="col-md-8">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-6">
                <h5 className="card-title">{product.name}</h5> </div>
                <div className="col-md-3 d-flex justity-content-end" >
                  <p className="card-text ml-5">{product.price.formatted}</p>
                </div>
                </div> 
                  <p className="text-success">In stock</p>
                  <p>sold by <span className="text-primary">LimeScotch</span> </p>
                 <p className="card-text"> <small className="text-light text-body-secondary bi bi-truck"> Amazon Delivered</small></p>
                 <p className="card-text"> <small className="text-body-secondary text-light">Gift options not available.<span className="text-primary">Learn more</span></small></p>
                  <p className="card-text"><span style={{fontWeight:700}}>Size :</span> 2xl</p>
                  
                  <div className="row ">
                  <div className="btn-group d-inline col-2">
                  <select id="quantitySelect" onChange={()=>{handleQuantityChange(product.id)}}>
                  <option value="1"> 1</option>
                  <option value="2"> 2</option>
                  <option value="1"> 3</option>
                  <option value="2"> 4</option>
                  <option value="1">5</option>
                  <option value="2">6</option>

                    </select>
                           </div>
                
                           <div className="delete_btn d-inline col-md-1"> 
                           <p type="button" href="#" className="card-text d-inline " onClick={()=>{handleRemoveFromCart(product.id)}}> <small className="text-primary text-body-primary "> Delete</small></p>
                           </div>
                         <div className="col-md-3">
                           <p className="card-text d-inline"> <small className=" text-body-primary text-primary d-inline "> Save for later</small></p>
                          </div>
                          
                           <p className="see col-md-3"> <small className="text-primary text-body-primary "> See more like this</small></p>
                          
                           <p className="card-text col"> <small className="text-primary text-body-primary "> Share</small></p>
                          

                        </div>
                  
                        </div>
                 </div>
              </div>
               </div>
            </div>
           
             </div>
              
          );
          
        })
        }
       
        </div> 
       <hr/>
       <div className="total col-md-8">
           <p className="d-flex justify-content-end">Subtotal : ₹{cartData.subtotal && cartData.subtotal.raw} </p>
       </div>
      </div>

    </div>
  </div>
  </CartContext.Provider>
)
    
}
export default Carts;