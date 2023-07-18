import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./cart_widget.css";

const CartWidget = () => {
  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  return (
    <div className="carrito">
      <ShoppingCartIcon sx={{ fontSize: "200%" }} />
      <p className="number">{quantity}</p>
    </div>
  );
};

export default CartWidget;
