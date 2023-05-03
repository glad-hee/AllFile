import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/Common.scss";
import MainPage from "./pages/MainPage";
import ProductPage from "./pages/ProductPage";
import Header from "./components/Header";
import ProductDetailPage from "./pages/ProductDetailPage";
import NotFound from "./pages/NotFound";
import { useState, useEffect } from "react";
import axios from "axios";
import PhotoPage from "./PhotoPage";

function App() {
  const [products, setProducts] = useState([]);

  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      setProducts(res.data.slice(0, 10));
    };

    const getPhoto = async () => {
      const resPhoto = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      setPhoto(resPhoto.data.slice(0, 10));
    };
    getProducts();
    getPhoto();
  }, []);
  console.log(photo);
  console.log(products);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route
            path="/products"
            element={<ProductPage products={products} />}
          ></Route>
          <Route
            path="/products/:productId"
            element={<ProductDetailPage products={products} />}
          ></Route>
          <Route path="/photo" element={<PhotoPage photo={photo} />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
