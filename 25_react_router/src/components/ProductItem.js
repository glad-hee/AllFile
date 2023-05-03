import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  console.log(product);
  return (
    <Link to={"/products/" + product.id}>
      <ul key={product.id} className="ProductItem">
        <li>상품명 : {product.name}</li>
        <li>상품명 : {product.body.slice(0, 50)}...</li>
      </ul>
    </Link>
  );
};

export default ProductItem;
