import { useState } from "react";

const useAlert = () => {
  const [alert, setAlert] = useState({
    show: false,
    message: "",
    type: "danger",
  });

  const showAlert = (message, type = "danger") => {
    setAlert({ show: true, message, type });
  };

  const hiddenAlert = () => {
    setAlert({ show: false, message: "", type: "danger" });
  };
  return {
    alert,
    showAlert,
    hiddenAlert,
  };
};

export default useAlert;
