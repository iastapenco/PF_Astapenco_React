import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import CardProducts from "../../components/CardProducts/CardProducts";
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs, where } from "firebase/firestore";
import "./CategoryPage.css";

const CategoryPage = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const q = query(
        collection(db, "productsList"),
        where("category", "==", category)
      );
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
        setProducts(docs);
      });
    };
    getProducts();
    console.log(products);
  }, [category]);

  return (
    <div className="container_categoria">
      {products.map((data) => {
        return (
          <div key={data.id}>
            <Link
              to={`/product/${data.id}`}
              style={{ textDecoration: " none" }}
            >
              <CardProducts data={data} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryPage;
