import { useParams } from "react-router-dom";

const ProductItem = ({items}) => {
    let { idProduct } = useParams();
        console.log(items)
        const producto = items.find((product) => product.id === idProduct);
        return (
        <div className="MainContainer">
            <h3>{producto.nombre}</h3>
            <img src={producto.imagen} alt={producto.nombre} />
            <h4>Precio: {producto.precio}$</h4>
            <h4>Fabricante: {producto.fabricante}</h4>
            <h4>Personaje: {producto.personaje}</h4>
            <h4>Altura: {producto.altura} cm</h4>
            <h4>Usada: {producto.usada}</h4>
            <h4>Articulada: {producto.articulada}</h4>
        </div>
        );
    }

export default ProductItem;