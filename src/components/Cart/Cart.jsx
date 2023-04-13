import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import "./Cart.css"
import { SdCard } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Checkout from "../../Checkout";
import ClearCartButton from "../../CleanCartButton";

const Cart = () => {
    const {cart} = useContext(CartContext);
    let precioactual = 0;
    cart.forEach(product => precioactual += product.precio);
    return (
        <div>
            {cart.length!= 0 ? cart.map((product, id) => (<div className="CartItems" key={product.id}><img src={product.imagen} alt="" /><h1>{product.nombre}</h1><h2>{"$" + product.precio}</h2></div>)): <h1>No hay productos en el carrito</h1>}
            <div className="priceContainer"><ClearCartButton/><h2>Precio total: ${precioactual}</h2></div>
            <Checkout/>
        </div>
        
    )
}

export default Cart;