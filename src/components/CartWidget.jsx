import "./NavBar.css"
import {Button, ButtonGroup} from "@mui/material";
import ShoppingCart from "@mui/icons-material/ShoppingCart";

const CartWidget = () => {
    return (
        <div className="CartButton">
            <Button startIcon={<ShoppingCart />} href="/productos">1</Button>
        </div>
    );
}

export default CartWidget;