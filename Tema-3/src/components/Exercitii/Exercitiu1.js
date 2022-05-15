import Product from "../Product";

const DUMMY_DATA = [
  {
    id: 1,
    title: "Miere",
    price: "15 ROM",
    categorie: "healty",
    img: "https://i.ibb.co/DKZfb36/miere.png",
  },
  {
    id: 2,
    title: "Carne",
    price: "35 ROM",
    categorie: "unhealthy",
    img: "https://i.ibb.co/B37hh86/carne.png",
  },

  {
    id: 3,
    title: "Rosii",
    categorie: "healty",
    img: "https://i.ibb.co/2y80R3T/tomato.png",
  },
];

const Exercitiu1 = () => {
  /*EXERCITIU 1 
  Am folosit .map ca sa generez 3 componente si o componenta am adaugat.o manual. 
  */

  const products = DUMMY_DATA.map((product) => (
    <Product
      key={product.id}
      title={product.title}
      price={product.price}
      categorie={product.categorie}
      imageSource={product.img}
    />
  ));

  return (
    <div className="box-exercitiu">
      <div className="box-title">
        <h5>Exercitiu 1</h5>
        <p>Cosul tau</p>
      </div>
      <div className="box-products">
        {products} <Product></Product>
      </div>
    </div>
  );
};
export default Exercitiu1;
