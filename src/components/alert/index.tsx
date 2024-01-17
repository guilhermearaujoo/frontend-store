import Snackbar from "@mui/material/Snackbar";
import { useContext, useEffect } from "react";
import { CartContext } from "../../context/cartContext";
import IconButton from "@mui/material/IconButton";

export default function Alert() {
  const { alert, setAlert } = useContext(CartContext);

  useEffect(() => {
    const t = setTimeout(() => {
      setAlert({ ...alert, open: false });
    }, 3000);

    return () => {
      clearTimeout(t);
    };
  }, [alert]);

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setAlert({ ...alert, open: false });
  };

  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleClose}
    >
      X
    </IconButton>
  );

  return (
    <Snackbar
      open={alert.open}
      onClose={handleClose}
      message={alert.alert}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      action={action}
    />
  );
}
