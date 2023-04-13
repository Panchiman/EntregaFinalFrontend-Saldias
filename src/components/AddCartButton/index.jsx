import { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";
import { Button } from "@mui/material";
import "./AddCartButton.css"

const AddCartButton = ({ product, cantidad}) => {
    const {cart} = useContext(CartContext);
    const {addToCart} = useContext(CartContext);
        
    return (
        <Button onClick={() => addToCart(product, cantidad)}  variant="contained">
            Agregar al carrito
        </Button>
    );
}

export default AddCartButton;