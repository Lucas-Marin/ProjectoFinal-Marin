import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebaseConfig";

export const agregarDocs = () => {
  const rellenar = () => {
    let productsCollection = collection(db, "products");
    products.forEach((product)=>{
        addDoc(productsCollection, product)
    })
  };

  return (
    <div>
      <button onClick={rellenar}>Agregar documentos</button>
    </div>
  );
};
