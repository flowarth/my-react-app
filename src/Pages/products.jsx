import CardProduct from "../components/Fragments/CardProduct";
import {useContext, useEffect, useState} from "react";
import {getProducts} from "../services/product.service.js";
import {useLogin} from "../hooks/useLogin.jsx";
import TableCard from "../components/Fragments/tableCard.jsx";
import Navbar from "../components/Layouts/navbar.jsx";
import {DarkMode} from "../context/DarkMode.jsx";

const PorductsPage = () => {
  const [products, setProducts] = useState([]);
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  useLogin();

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, [])

  return (
    <>
      <Navbar />
      <div className={`flex justify-center py-5 ${isDarkMode && "bg-slate-900"}`}>
        <div className="w-3/4 flex flex-wrap">
          {products.length > 0 && products.map((prod) => (
            <CardProduct key={prod.id}>
              <CardProduct.Header image={prod.image} id={prod.id} />
              <CardProduct.Body name={prod.title} id={prod.id}>
                {prod.description}
              </CardProduct.Body>
              <CardProduct.Footer
                price={prod.price}
                id={prod.id}
              ></CardProduct.Footer>
            </CardProduct>
          ))}
        </div>
        <div className="w-1/4">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          <TableCard products={products} />
        </div>
      </div>
    </>
  );
};

export default PorductsPage;
