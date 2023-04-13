import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const clear = () => {
		setCart([]);
	};

    function addToCart(product, cantidad) {
        const productIndex = cart.findIndex(p => p.nombre === product.nombre);
        console.log(cantidad)
        if (!cantidad){
            cantidad = 1;
        }
        if (productIndex >= 0) {
            const updatedCart = [...cart];
            updatedCart[productIndex].quantity += cantidad;
            setCart(updatedCart);
            } 
            else {
            const newProduct = { ...product, quantity: cantidad };
            setCart([...cart, newProduct]);
            }
        }

return (
    <CartContext.Provider value={{ cart, clear, addToCart }}>
        {children}
    </CartContext.Provider>
);
};