import "../NavBar.css"
import {Button, ButtonGroup} from "@mui/material";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { CartContext } from "../../context/cartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";



const CartWidget = () => {
    const {cart} = useContext(CartContext);
    return (
        <div className="CartButton">
        <Link to="/cart">
        <Button startIcon={<ShoppingCart/>}>{cart.length}</Button>
        </Link>
            
        </div>
    );
}

export default CartWidget;