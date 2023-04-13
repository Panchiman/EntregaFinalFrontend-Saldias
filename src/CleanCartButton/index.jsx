import { useContext } from "react";
import { CartContext } from "../context/cartContext";


const ClearCartButton = () => {
    const {cart} = useContext(CartContext);
    const {clear} = useContext(CartContext);
return(
    <button onClick={clear}>Limpiar carrito</button>
)
}


export default ClearCartButton;