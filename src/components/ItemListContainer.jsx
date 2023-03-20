import CardProduct from "./CardProduct";
import { Grid } from "@mui/material";

const ItemListContainer = ({products}) => {
    return (
        <div className="MainContainer">
        <h1>Todas las figuras:</h1>
        <Grid container spacing={1}>
            {products.map((product, id) => (
        <Grid item xs={3}><CardProduct key={id} product={product} id={id} /></Grid>))}
        </Grid>
        </div>
    );
}

export default ItemListContainer;