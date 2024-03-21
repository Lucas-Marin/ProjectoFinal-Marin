import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import { BsFillCartCheckFill } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <Link to="/cart">
      <Badge badgeContent={cart.length} showZero color="primary">
        <BsFillCartCheckFill size="35px" color="black" />
      </Badge>
    </Link>
  );
};

export default CartWidget;
