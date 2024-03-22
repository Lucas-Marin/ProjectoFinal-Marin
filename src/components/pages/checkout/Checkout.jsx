import Alert from "@mui/material/Alert";
import SendIcon from '@mui/icons-material/Send';
import Button from "@mui/material/Button";
export const Checkout = ({ envioDeFormulario, capturar, orderId }) => {
  return (
    <div>
      {orderId ? (
        <Alert variant="filled" severity="success">
          Gracias por tu compra, codigo de transaccion: {orderId}
        </Alert>
      ) : (
        <form onSubmit={envioDeFormulario}>
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            onChange={capturar}
            name="name"
          />

          <input
            type="text"
            placeholder="Ingresa tu Numero Telefonico"
            onChange={capturar}
            name="phone"
          />
          <input
            type="text"
            placeholder="Ingresa tu email"
            onChange={capturar}
            name="email"
          />

          <button type="submit">comprar</button>
        </form>
      )}
      <Button color="error" variant="contained" endIcon={<SendIcon />}>Seguir Comprando</Button>
    </div>
  );
};
