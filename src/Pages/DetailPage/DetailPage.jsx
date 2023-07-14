import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebaseConfig";
import {
  collection,
  query,
  getDocs,
  where,
  documentId,
} from "firebase/firestore";
import CardProductDetails from "../../components/CardProductDetails/CardProductDetails";
import "./DetailPage.css";

const DetailPage = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const q = query(
        collection(db, "productsList"),
        where(documentId(), "==", id)
      );
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
        setProductData(docs);
      });
    };
    getProduct();
  }, [id]);

  return (
    <div>
      {productData.map((data) => {
        return (
          <div key={data.id} className="detalle">
            <CardProductDetails data={data} />
          </div>
        );
      })}
    </div>
  );
};

export default DetailPage;
