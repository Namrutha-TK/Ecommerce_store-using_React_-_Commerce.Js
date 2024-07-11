import React,{useState,useContext, createContext, useEffect} from "react";
import { useCartCount } from "./CartCountContext";

const initialCartParams={
  getcart:{},
  handleRemoveFromCart:{}
}
const CartContext=createContext(initialCartParams);

   
   
   


export default CartContext ;


