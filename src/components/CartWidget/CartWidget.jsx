import "../NavBar.css"
import {Button, ButtonGroup} from "@mui/material";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { CartContext } from "../../context/cartContext";
import { useContext } from "react";



const CartWidget = () => {
    const {cart} = useContext(CartContext);
    return (
        <div className="CartButton">
            <Button startIcon={<ShoppingCart />} to="/cart">{cart.length}</Button>
        </div>
    );
}

export default CartWidget;