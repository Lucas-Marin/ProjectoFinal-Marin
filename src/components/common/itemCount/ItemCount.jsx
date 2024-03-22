import { Button } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';
const ItemCount = ({ counter, addOne, subOne, onAdd }) => {
  return (
    <>
      <div style={{ marginBottom: "20px", display: "flex", gap: "30px" }}>
        <Button variant="contained" onClick={addOne}>
          sumar
        </Button>
        <h2> {counter} </h2>
        <Button
          variant="contained"
          onClick={subOne}
          disabled={counter === 1 ? true : false}
        >
          restar
        </Button>

        <Button color="success" variant="contained" onClick={ ()=> onAdd(counter) }>agregar al carrito <IconButton color= "inherit" aria-label="add to shopping cart">
        <AddShoppingCartIcon />
      </IconButton> </Button>
      </div>
    </>
  );
};

export default ItemCount;
