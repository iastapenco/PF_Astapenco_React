import React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const MessageSuccess = ({ purchaseID }) => {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="success">
        Gracias por su compra. Su id de transacción es : {purchaseID}. Recuerde
        guardarlo por cualquier consulta
      </Alert>
    </Stack>
  );
};

export default MessageSuccess;
