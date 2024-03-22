import { useContext, useEffect, useState } from "react";
import { getProduct } from "../../../productsMock";
import { useParams, useNavigate } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import { CartContext } from "../../../Context/CartContext";
import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc} from "firebase/firestore";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";


export const ItemDetailContainer = () => {
  const { id } = useParams();
  

  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const {addToCart, getTotalQuantityById} = useContext(CartContext)

  const initial = getTotalQuantityById(id)
  

  useEffect(() => {
    setIsLoading(true)

    let productsCollection = collection(db, "products");
    let refDoc = doc(productsCollection, id)
    getDoc( refDoc ).then(res=>{
      setItem ({...res.data(), id : res.id})
    }).finally(()=>setIsLoading(false))
      
  }, [id]);


  const onAdd = (cantidad) => {
    let infoProducto = {
      ...item,
      quantity: cantidad,
    };
    addToCart(infoProducto)

  };
  if (isLoading) {
  return (
    <Box sx={{ width: "100%" }}>
        <LinearProgress />
        <LinearProgress />
      </Box>
    );
  }else
  return (
    <>
      <ItemDetail item={item} onAdd={onAdd} initial={initial} /> 
    </>
  );
};
