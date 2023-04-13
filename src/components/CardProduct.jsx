import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

export default function CardProduct({product}) {
    return (
        <Link to={"/item/" + product.id}>
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
            <CardMedia
            component="img"
            height="600"
            image={product.imagen}
            alt={product.nombre}
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {product.nombre}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Precio: {product.precio}$
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
        </Link>
    );
}