import React from "react";
import Swal from "sweetalert2";

const ErrorMessage = () => {
  return Swal.fire({
    position: "center",
    width: "300px",
    icon: "error",
    title: "No se pudo completar su compra",
    html: `<h4>Su e-mail y su e-mail de confirmación no coinciden</h4>`,
    showConfirmButton: true,
  }).then((resp) => {
    if (resp.isConfirmed) {
      window.location.reload();
    } else {
      window.location.reload();
    }
  });
};

export default ErrorMessage;
