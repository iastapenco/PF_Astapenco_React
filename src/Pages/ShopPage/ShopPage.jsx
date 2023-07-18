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
  console.log(cart);
  return (
    <>
      {!formulario ? (
        <div className="cart-container">
          <div>
            <h2>Total de productos: {quantity}</h2>

            <div>
              {cart.map((product) => {
                return (
                  <div className="ProductsCart" key={product.id}>
                    <h4>{`${product.name}: ${product.quantity} x $${product.precio}`}</h4>
                    <img
                      src={product.img}
                      style={{ width: 75, height: 50, paddingTop: 5 }}
                    />
                  </div>
                );
              })}
              <h3
                style={{
                  paddingTop: 5,
                  border: "1px solid black",
                  boxSizing: "borderBox",
                  backgroundColor: "#25AEBE",
                  marginLeft: 10,
                  marginTop: 5,
                  marginRight: 10,
                }}
              >
                Precio total: ${totalPrice}
              </h3>
            </div>

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
      {formulario ? <FormularioCompras /> : null};
    </>
  );
};

export default ShopPage;
