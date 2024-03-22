import { Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../Context/CartContext";
import "./CartContainer.css";
import Box from "@mui/material/Box";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';

export const CartContainer = () => {
  const { cart, clearCart, removeById, getTotalPrice } =
    useContext(CartContext);
  let totalPrice = getTotalPrice();
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
          <Button
            size="small"
            color="secondary"
            variant="contained"
            onClick={() => removeById(product.id)}
          >
            Eliminar
          </Button>
        </div>
      ))}

      <Box
        component="section"
        height={60}
        width={200}
        my={1}
        display="flex"
        alignItems="center"
        gap={4}
        p={2}
        sx={{ p: 2, border: "1px solid black", borderRadius:"13px",backgroundColor:"rgb(67, 151, 247)" }}
      >
        <h2>Total a pagar: ${totalPrice}</h2>
      </Box>
        <Link to="/">
      <Button size="small" color="success" variant="contained" onClick={ ()=> onAdd(counter) }>Segui Comprando <IconButton color= "inherit" aria-label="add to shopping cart">
        <AddShoppingCartIcon />
      </IconButton> </Button>
      </Link>

      <Button onClick={clearCart} variant="contained" color="error">
        Limpiar Carrito
      </Button>
      

      <Link to="/checkout">
        <Button variant="contained">Terminar compra</Button>
      </Link>
    </div>
  );
};
