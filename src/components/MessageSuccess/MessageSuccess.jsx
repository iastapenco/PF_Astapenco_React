import React from "react";
import Swal from "sweetalert2";

const MessageSuccess = ({ purchaseID }) => {
  return Swal.fire({
    position: "center",
    width: "300px",
    icon: "success",
    title: "Su compra fue exitosa",
    html: `<h4>Su ID de transacción es: ${purchaseID}. Recuerde guardarlo por cualquier consulta</h4>`,
    showConfirmButton: true,
  });
};

export default MessageSuccess;
