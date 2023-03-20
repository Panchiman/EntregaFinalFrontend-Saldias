import './App.css';
import Navbar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer';
import { useEffect, useState } from 'react';
import {Route, Routes} from "react-router-dom";
import ProductItem from './components/ProductItem';
import ItemListFiltered from './ItemListFiltered';
import Index from './components/Index';

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://mocki.io/v1/fcbfd3cd-3f3f-453b-8eee-9f205f02a649")
    .then((response) => response.json())
    .then((data) => setProducts(data))
  }, [])
  
  return (
    <div>
      <Navbar />
      <Routes>
      <Route path="/" element={<Index></Index>} />
        <Route path="productos" element={<ItemListContainer products={products}/>} />
        <Route path=":id" element={<ProductItem products={products}/>} />
        <Route path="productos/:id" element={<ProductItem products={products}/>} />
        <Route path="nuevas" element={<ItemListFiltered products={products} estado="no"/>} />
        <Route path="/nuevas/:id" element={<ProductItem products={products}/>} />
        <Route path="usadas" element={<ItemListFiltered products={products} estado="si"/>} />
        <Route path="/usadas/:id" element={<ProductItem products={products}/>} />
      </Routes>
        </div>
  
  )
}

export default App
