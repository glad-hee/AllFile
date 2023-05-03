import { useParams, useNavigate } from "react-router-dom";

const ProductDetailPage = ({ products }) => {
  //   console.log(products);

  const { productId } = useParams();
  console.log(productId);

  // Hint filter()
  const targetProduct = products.filter((v) => productId == v.id);

  // 배열구조분해
  // const [targetProduct] = products.filter((v) => productId == v.id);
  console.log(targetProduct);

  const exist = () => {
    return (
      <ul>
        <li>{targetProduct[0].name}</li>
        <li>{targetProduct[0].body}</li>
      </ul>
    );
  };

  const navigate = useNavigate();

  return (
    <main className="ProductDetailPage">
      <h1>여기는 상품 디테일 페이지!</h1>
      <button onClick={() => navigate(-1)}>목록보기</button>
      <button onClick={() => navigate("/")}>홈으로 이동하기</button>
      {targetProduct.length > 0 ? (
        exist()
      ) : (
        <ul>
          <li>존재하지 않는 상품입니다</li>
        </ul>
      )}
    </main>
  );
};

export default ProductDetailPage;
