import './App.css';
import Navbar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer';
import { useEffect, useState } from 'react';
import {Route, Routes} from "react-router-dom";
import ProductItem from './components/ProductItem';
import ItemListFiltered from './components/ItemListFiltered';
import Index from './components/Index';
import db from '../db/firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import { CartProvider } from './context/cartContext';
import Cart from './components/Cart/Cart';
import Checkout from './Checkout';

function App() {
  const [items, setItems] = useState([]);
  const itemsRef = collection(db, "items");
  
const getItems = async () => {
  const itemCollection =  await getDocs(itemsRef)
  const items = itemCollection.docs.map((doc) => ({...doc.data(), id: doc.id}))
  setItems(items);
}

useEffect (() => {
  getItems();
}, []);

  return (
    <div>
    <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index></Index>} />
          <Route path="productos" element={<ItemListContainer items={items}/>} />
          <Route path="category/:idCategory" element={<ItemListContainer items={items}/>} />
          <Route path="Item/:idProduct" element={<ProductItem items={items}/>} />
          <Route path="cart" element={<Cart/>} />
          <Route path="/quienes-somos" element={<h1>Quienes somos</h1>} />
          <Route path="checkout" element = {<Checkout/>} />
        </Routes>
      </CartProvider>
        </div>
    
  )
}

export default App
