import React from "react";
import FormSign from "./FormSign";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { notifyErorr, notifySuccess } from "../helpers/Toast";

const SignUp = () => {
  const register = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        notifySuccess("🦄 Wow so easy! Created Successfully");
      })
      .catch((err) => {
        const errorMessage = err.message;
        notifyErorr(`👋🏻 We Are Sorry ! ${errorMessage}`);
      });
  };
  return <FormSign title="Sign Up" functionValue={register} />;
};

export default SignUp;
