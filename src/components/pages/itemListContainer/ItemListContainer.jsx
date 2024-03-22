import ItemList from "./ItemList";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let productsCollection = collection(db, "products");
  useEffect(() => {
    setIsLoading(true)
  
    let consulta;
    if(category){
      
      let productsFiltered = query( productsCollection, where( "category","==" , category ));
      consulta = productsFiltered
    }else{
      consulta = productsCollection
    }
    
    getDocs(consulta)
    .then((res) => {
      let nuevoArray = res.docs.map( (elemento) => {
        return {...elemento.data(), id: elemento.id};
      });

        setProducts(nuevoArray);

    }).finally(()=>{setIsLoading(false)});
  }, [category]);

  if (isLoading) {
    return (
      <Box sx={{ width: "100%" }}>
        <LinearProgress />
        <LinearProgress />
      </Box>
    );
  }
  return (
    <>
      <ItemList products={products} />
    </>
  );
};

export default ItemListContainer;
