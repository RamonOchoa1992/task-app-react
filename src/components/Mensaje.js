import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";

function Mensaje({ content }) {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert
        style={{ marginTop: "2rem" }}
        variant="danger"
        onClose={() => setShow(false)}
        dismissible
      >
        <Alert.Heading>Ups!</Alert.Heading>
        <p>{content}</p>
      </Alert>
    );
  }
}

export default Mensaje;
