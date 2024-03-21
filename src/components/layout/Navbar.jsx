import { Link } from "react-router-dom";
import CartWidget from "../common/CartWidget";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <>
      <div className="containerNavbar">
        <ul className="categories">
          <Link to="/">Todas</Link>
          <Link to="/category/urbanas">Urbanas</Link>
          <Link to="/category/Running">Running</Link>
          <Link to="/category/Botines">Botines</Link>
        </ul>
        <CartWidget />
      </div>
    </>
  );
};
