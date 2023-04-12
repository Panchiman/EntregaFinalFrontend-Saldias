import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const clear = () => {
		setCart([]);
	};

return (
    <CartContext.Provider value={{ cart, clear }}>
        {children}
    </CartContext.Provider>
);
};