import { toast } from "react-toastify";
const options = {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  theme: "dark",
};
export const notifyErorr = (message) => toast.error(message, { ...options });
export const notifySuccess = (message) =>
  toast.success(message, { ...options });
