export let products = [
  {
    
    title: "Adibos",
    price: 40000,
    description: "Zapatilla Blanca con interior azul cuadriculado",
    img: "https://res.cloudinary.com/dgsvx4hcr/image/upload/v1709162326/cld-sample-5.jpg",
    stock: 8,
    category: "urbanas",
  },
  {
    
    title: "Naik",
    price: 38000,
    description: "Deportivas comodas para acividades recreativas ",
    img: "https://res.cloudinary.com/dgsvx4hcr/image/upload/v1709162316/samples/shoe.jpg",
    stock: 4,
    category: "Running",
  },
  {
    
    title: "Puma",
    price: 42000,
    description: "Calidad y comodidad con estilo clasico ",
    img: "https://res.cloudinary.com/dgsvx4hcr/image/upload/v1709162784/NI_DC3729-003-1_kbvtub.jpg",
    stock: 6,
    category: "urbanas",
    },
  {
    
    title: "Jumbro",
    price: 40500,
    description: "Comodidad, calidad y precio en un mismo calzado",
    img: "https://res.cloudinary.com/dgsvx4hcr/image/upload/v1709162840/659219-600-600_mzwm8k.webp",
    stock: 5,
    category: "urbanas",
     },
  {
    
    title: "Kappa Celeste",
    price: 67000,
    description: "Aumenta tu rendimiento en campos asfaltados",
    img: "https://res.cloudinary.com/dgsvx4hcr/image/upload/v1709162904/c77c2a06864ac9aca38dc5bd9371de015471edcdbf322dfb14411689bf968ae5_ryun6w.jpg",
    stock: 3,
    category: "Botines",
  },
  {
    
    title: "Puma Naranja",
    price: 73000,
    description: "Maximo agarre y rendimiento en sintentico",
    img: "https://res.cloudinary.com/dgsvx4hcr/image/upload/v1709162916/png_ao3fgy.avif",
    stock: 2,
    category: "Botines",
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      setTimeout(() => {
        resolve(products);
      }, 500);
    } else {
      reject("No hay productos");
    }
  });
};

export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      const item = products.find((product) => product.id === id);

      setTimeout(() => {
        if (item) {
          resolve(item);
        } else {
          reject(`No se encuentra el producto con el id ${id}`);
        }
      }, 500);
    } else {
      reject("No hay productos");
    }
  });
};
