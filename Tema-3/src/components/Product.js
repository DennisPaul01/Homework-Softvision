import defaultProduct from "../assets/defaultProduct.png";
import PropTypes from "prop-types";

const Product = (props) => {
  // Destructuring la props pentru a le folosi mai usor
  // Tipul categoriei (healty / unhealthy) va determina culoare label-ulului* (probabil scris gresit) dar si culoare borderului la intregul box
  const { title, price, categorie, imageSource } = props;

  // Aici determinam ce culoare v-a fi afisata
  const sanatateCategorie = categorie === "healty" ? "#4fb34d" : "#F77D72";

  return (
    <div className="product" style={{ borderColor: sanatateCategorie }}>
      <div className="product-img">
        <img src={`${imageSource}`} alt="Product"></img>
      </div>
      <div className="product-details">
        <p className="product-title">{title}</p>
        <p className="product-price">{price}</p>
        <div
          className="product-tag"
          style={{
            backgroundColor: sanatateCategorie,
          }}
        >
          {categorie}
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
  categorie: PropTypes.string,
  imageSource: PropTypes.string,
};
Product.defaultProps = {
  title: "Inexistent",
  price: "Inexistent",
  categorie: "unhealthy",
  imageSource: defaultProduct,
};

export default Product;
