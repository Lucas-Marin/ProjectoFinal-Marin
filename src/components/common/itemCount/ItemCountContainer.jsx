import { useState } from "react";
import ItemCount from "./ItemCount";
import { Alert } from "@mui/material";

const ItemCountContainer = ({ stock, onAdd, initial = 1 }) => {
  const [counter, setCounter] = useState(initial);

  const addOne = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    } else {
      alert("Stock maximo alcanzado")
    }
  };

  const subOne = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    } else {
      alert("no puede ser menos de 1");
    }
  };

  return (
    <ItemCount
      counter={counter}
      addOne={addOne}
      subOne={subOne}
      onAdd={onAdd}
      initial={initial}
    />
  );
};

export default ItemCountContainer;
