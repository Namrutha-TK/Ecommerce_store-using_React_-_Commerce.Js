import { Routes, Route} from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
//import { Cart as CommerceCart } from '@chec/commerce.js/features/cart';
import commerce from "./lib/commerce";
import Carts from "./components/cart/Carts";
import Header from "./components/header/Header";
import Nav from "./components/header/Nav";
import Footer from "./components/footer/Footer";
import ProductList from "./components/productList/ProductList";
import ProductDetail from "./screens/ProductDetail";
import { useCartCount } from "./components/context/CartCountContext";
import Home from "./components/home/Home";
import Email from "./components/signIn/Email";

function App() {
  var [cart, setCart] = useState({});
   //localStorage.removeItem('cartId');
   const {updateCartCount} =useCartCount();
  async function fetchCart() {
    try {
      var cartResponse = await fetch("https://api.chec.io/v1/carts", {
        method: "GET",
        headers: {
          "X-Authorization": "pk_57592c1e01d9e7ca56c01e13ca575289117a34ebef2b2",
        },
      });
      if (cartResponse.ok) {
        var data = await cartResponse.json();
        setCart(data);
        console.log("cart",cart)
        localStorage.setItem("cartId", data.id);
      } else {
        throw new Error("Failed to fetch cart");
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  useEffect(() => {
    fetchCart();
  }, []);

   console.log("cart after fetch cart", cart);
   var productId ,quantity;
   async function handleAddToCart(productId, quantity) {
     const productData = { id: productId, quantity: quantity };
     const cartId = localStorage.getItem("cartId");
     try {
      var response = await fetch("https://api.chec.io/v1/carts/"+cartId, {
        method: "POST",
         headers: {
           "X-Authorization":"pk_57592c1e01d9e7ca56c01e13ca575289117a34ebef2b2",
           "Content-Type": "application/json",
           Accept: "application/json",
         },
         body: JSON.stringify(productData),
       });
       if (response.ok) {
         var data = await response.json();
         console.log("Added to cart", data);
         setCart(data);
       } else {
         throw new Error(
           `Failed to add to cart: ${response.status} ${response.statusText}`
         );
       }
       console.log("Items added to cart",cart);
   } catch (error) {
   }
   }
  useEffect(() => {
     handleAddToCart(productId,quantity);
   }, []);
  // const updateCart= async()=>{
  //   const cartId=localStorage.getItem("cartId")
  //   try{
  //     const response=await fetch("https://api.chec.io/v1/carts/"+cartId,{
  //       method:'PUT',
  //       headers:{
  //         "X-Authorization":"pk_57592c1e01d9e7ca56c01e13ca575289117a34ebef2b2",
  //         "Content-Type": "application/json",
  //          "Accept": "application/json",
  //       },
        // body:{
               
        // }

  //     });
  //     if(response.ok){
  //       var data=response.json();
  //       setCart(data.data);
  //     }
  //   }catch(error) {
  //     console.error("Error deleteing cart item ", error);
  //   }
  // }
  // useEffect(()=>{
  //   updateCart();
  // })
  

  return (
    <div className="container-fluid m-0 p-0">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/products" element={<ProductList />} />
        <Route
          path="/products/:productId"
          element={<ProductDetail handleAddToCart={handleAddToCart} />}
        />
        <Route path="/cart" element={<Carts />} />
        <Route path="/sign_in" element={<Email/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
