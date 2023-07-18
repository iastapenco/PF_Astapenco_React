import React from "react";
import ListItemContainer from "../../components/ListItemContainer/ListItemContainer";
import { useState, useEffect } from "react";
import CardProducts from "../../components/CardProducts/CardProducts";
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import "./inicio.css";

const InicioPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const q = query(collection(db, "productsList"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
        setProducts(docs);
      });
    };
    getProducts();
  }, []);

  return (
    <div className="container">
      {products.map((product) => {
        return (
          <div className="product_container">
            <div key={product.id} className="card">
              <Link to={`/product/${product.id}`} className="anchor">
                <CardProducts data={product} />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default InicioPage;
