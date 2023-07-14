import React from 'react'
import "./list_item_container.css";

const ListItemContainer = ({greetings, userName}) => {
  return (
    <>
      <h2 className = "saludos" >Hola {userName}! {greetings} a nuestro coffee shop online!</h2>
    </>
  )
}

export default ListItemContainer