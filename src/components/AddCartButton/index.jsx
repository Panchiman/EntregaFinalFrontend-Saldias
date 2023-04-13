import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { Button } from "@mui/material";
import "./AddCartButton.css"

const AddCartButton = ({ product }) => {
    const {cart} = useContext(CartContext);
    const {addCart} = useContext(CartContext);
    const isInCart = cart.find((item) => item.id === product.id);
    const handleClick = () => {
        if (isInCart) {
            alert("Ya se encuentra en el carrito")
        }
        else {
            addCart(product);
        }
    };

    return (
        <Button onClick={handleClick}  variant="contained">
            {isInCart ? "Ya se encuentra en el carrito" : "Agregar al carrito"}
        </Button>
    );
}

export default AddCartButton;