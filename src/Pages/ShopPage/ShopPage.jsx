import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import MessageSuccess from "../../components/MessageSuccess/MessageSuccess";
import "./ShopPage.css";

const initialState = {
  name: "",
  lastName: "",
  city: "",
  email: "",
  emailConfirm: "",
};

const ShopPage = () => {
  const [values, setValues] = useState(initialState);
  const [purchaseID, setPurchaseID] = useState(null);

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "compras"), { values });
    setPurchaseID(docRef.id);
    setValues(initialState);
  };

  return (
    <div className="containerShop">
      <h1>Formulario de compra</h1>
      <form className="formContainer" onSubmit={onSubmit}>
        <TextField
          placeholder="Nombre"
          name="name"
          value={values.name}
          onChange={handleOnChange}
          style={{ margin: 10, width: 400 }}
        />
        <TextField
          placeholder="Apellido"
          name="lastName"
          value={values.lastName}
          onChange={handleOnChange}
          style={{ margin: 10, width: 400 }}
        />
        <TextField
          placeholder="Ciudad"
          name="city"
          value={values.city}
          onChange={handleOnChange}
          style={{ margin: 10, width: 400 }}
        />
        <TextField
          placeholder="e-mail"
          name="email"
          value={values.email}
          onChange={handleOnChange}
          style={{ margin: 10, width: 400 }}
        />
        <TextField
          placeholder="Repetir e-mail"
          name="emailConfirm"
          value={values.emailConfirm}
          onChange={handleOnChange}
          style={{ margin: 10, width: 400 }}
        />
        <Button
          type="submit"
          style={{ marginBottom: 10 }}
          variant="contained"
          endIcon={<SendIcon />}
        >
          Enviar
        </Button>
      </form>

      {purchaseID ? <MessageSuccess purchaseID={purchaseID} /> : null}
    </div>
  );
};

export default ShopPage;
