import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const CardProducts = ({ data }) => {
  return (
    <Card sx={{ width: 300, height: 400 }}>
      <CardActionArea>
        <CardMedia
          sx={{ width: 300, height: 250 }}
          component="img"
          image={data.img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.cantidad} | Precio ${data.precio}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardProducts;
