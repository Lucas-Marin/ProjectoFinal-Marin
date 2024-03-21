import { Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../Context/CartContext";
import "./CartContainer.css";
export const CartContainer = () => {
  const { cart, clearCart, removeById } = useContext(CartContext);
  return (
    <div>
      {cart.map((product) => (
        <div className={"CartItemDetail"} key={product.id}>
          <div className={"CartImage"}>
            <img src={product.img} alt="" />
          </div>
          <h2>nombre: {product.title}</h2>
          <h2>cantidad: {product.quantity}</h2>
          <h2>precio: ${product.price}</h2>
          <Button size="small" color="secondary" variant="contained" onClick={() => removeById(product.id)}>Eliminar</Button>
        </div>
      ))}

      <Button onClick={clearCart} variant="contained" color="error">
        Limpiar Carrito
      </Button>

      <Link to="/checkout">
        <Button variant="contained">Terminar compra</Button>
      </Link>
    </div>
  );
};
