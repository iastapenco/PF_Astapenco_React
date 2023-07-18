import React, { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import FormularioCompras from "../../components/FormularioCompras/FormularioCompras";
const ShopPage = () => {
  const [cart, setCart] = useContext(CartContext);
  const [formulario, setFormulario] = useState(false);
  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const totalPrice = cart.reduce(
    (acc, curr) => acc + curr.quantity * curr.precio,
    0
  );

  return (
    <>
      {!formulario ? (
        <div className="cart-container">
          <div>
            <h2>Total de productos: {quantity}</h2>
            <h3>Precio total: ${totalPrice}</h3>
            <div className="btn-container">
              <h3>
                Haz click en "Confirmar compra" para ir al formulario de compras
              </h3>
              <button
                className="btn-checkout"
                onClick={() => setFormulario(true)}
              >
                Confirmar compra
              </button>
            </div>
          </div>
        </div>
      ) : null}
      {formulario ? <FormularioCompras /> : null}
    </>
  );
};

export default ShopPage;
