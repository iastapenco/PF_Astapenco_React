import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { CartContext } from "../../Context/CartContext";

const CardProducts = ({ data }) => {
  const [cart, setCart] = useContext(CartContext);

  const addToCart = () => {
    setCart((currProducts) => {
      const isProductsFound = currProducts.find(
        (product) => product.id === data.id
      );
      if (isProductsFound) {
        return currProducts.map((product) => {
          if (product.id === data.id) {
            return { ...product, quantity: product.quantity + 1 };
          } else {
            return product;
          }
        });
      } else {
        return [
          ...currProducts,
          { id: data.id, quantity: 1, precio: data.precio },
        ];
      }
    });
  };

  const removeProduct = (id) => {
    setCart((currProducts) => {
      if (currProducts.find((product) => product.id === id)?.quantity === 1) {
        return currProducts.filter((product) => product.id !== id);
      } else {
        return currProducts.map((product) => {
          if (product.id === id) {
            return { ...product, quantity: product.quantity - 1 };
          } else {
            return product;
          }
        });
      }
    });
  };

  const getQuantityById = (id) => {
    return cart.find((product) => product.id === id)?.quantity || 0;
  };

  const quantityPerProduct = getQuantityById(data.id);
  return (
    <Card sx={{ width: 300 }}>
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
          <Typography variant="body3" color="text.secondary">
            {data.details}
          </Typography>
          <div className="btn">
            {quantityPerProduct === 0 ? (
              <button
                className="product-add-button"
                onClick={() => addToCart()}
              >
                + Agregar al carrito
              </button>
            ) : (
              <button
                className="product-plus-button"
                onClick={() => addToCart()}
              >
                + Agregar uno más
              </button>
            )}
            {quantityPerProduct > 0 && (
              <button
                className="product-minus-button"
                onClick={() => removeProduct(data.id)}
              >
                Eliminar producto
              </button>
            )}
            {quantityPerProduct > 0 && (
              <div className="product-quantity">{quantityPerProduct}</div>
            )}
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardProducts;
