import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./cart_widget.css";

const CartWidget = () => {
  return (
    <div className = "carrito">
      <ShoppingCartIcon sx={{fontSize: "200%"}}/>
      <p className="number">4</p>
    </div>
  )
}

export default CartWidget