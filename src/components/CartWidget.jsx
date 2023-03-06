import "./NavBar.css"
import {Button, ButtonGroup} from "@mui/material";
import ShoppingCart from "@mui/icons-material/ShoppingCart";

const CartWidget = () => {
    return (
        <div className="CartButton">
            <Button startIcon={<ShoppingCart />}>1</Button>
        </div>
    );
}

export default CartWidget;