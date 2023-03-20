import { useParams } from "react-router-dom";

const ProductItem = ({products}) => {

    let { id } = useParams();
    return (
        <div className="MainContainer">
        <h3>{products[id].nombre}</h3>
        <img src={products[id].imagen} alt={products[id].nombre} />
        <h4>Precio: {products[id].precio}$</h4>
        <h4>Fabricante: {products[id].fabricante}</h4>
        <h4>Personaje: {products[id].personaje}</h4>
        <h4>Altura: {products[id].altura} cm</h4>
        <h4>Usada: {products[id].usada}</h4>
        <h4>Articulada: {products[id].articulada}</h4>
        </div>
    );
};

export default ProductItem;