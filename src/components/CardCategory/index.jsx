import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

export default function CardCategory({nombre, imagen, id}) {
    return (
        <Link to={id}>
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
            <CardMedia
            component="img"
            height="600"
            image={imagen}
            alt={"Figuras"}
            />
            <CardContent>
            <Typography gutterBottom variant="h4" component="div">
                Figuras {nombre}
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
        </Link>
    );
}