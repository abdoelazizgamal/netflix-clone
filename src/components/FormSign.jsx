import { useRef } from "react";
import { notifyErorr } from "../helpers/Toast";

const FormSign = ({ title, functionValue }) => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !emailRef.current.value.length > 0 ||
      !passwordRef.current.value.length > 0
    ) {
      notifyErorr("Please Enter Valid Email or Valid Password ");
      return;
    }
    functionValue(emailRef.current.value, passwordRef.current.value);
  };
  return (
    <div className="sign-Screen">
      <form action="" onSubmit={handleSubmit}>
        <h1>{title}</h1>
        <input type="email" placeholder="Email" ref={emailRef} />
        <input type="password" placeholder="Password" ref={passwordRef} />
        <button type="submit">{title}</button>
      </form>
    </div>
  );
};

export default FormSign;
