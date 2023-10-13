import React from "react";

//Material UI
import Alert from "@mui/material/Alert";

function MessagesForm({ messageForm }) {
  return (
    <>
      {messageForm == "success" ? (
        <Alert className="message-form" severity="success">
          <span className="fw-bold">Registrado</span>, ¡Disfruta de la
          experiencia Dalefon!
        </Alert>
      ) : null}
      {messageForm == "warning" ? (
        <Alert className="message-form" severity="warning">
          Por favor, complete todos los campos obligatorios.
        </Alert>
      ) : null}

      {messageForm == "success-user" ? (
        <Alert className="message-form" severity="success">
          <span className="fw-bold">Iniciando sesión.</span>
        </Alert>
      ) : null}
      {messageForm == "danger-user" ? (
        <Alert className="message-form" severity="error">
          Usuario no encontrado, favor de verificar datos.
        </Alert>
      ) : null}
    </>
  );
}

export default MessagesForm;
