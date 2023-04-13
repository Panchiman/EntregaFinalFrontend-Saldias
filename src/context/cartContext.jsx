import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const clear = () => {
		setCart([]);
	};

    const addCart = (product) => {
        setCart(cart.concat(product));
    }

return (
    <CartContext.Provider value={{ cart, clear, addCart }}>
        {children}
    </CartContext.Provider>
);
};