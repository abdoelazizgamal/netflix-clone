import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { notifyErorr, notifySuccess } from "../helpers/Toast";
import FormSign from "./FormSign";

const SignIn = () => {
  const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        notifySuccess("🦄 Signed in Successfully");
      })
      .catch((error) => {
        const errorMessage = error.message;
        notifyErorr(`👋🏻 We Are Sorry ! ${errorMessage}`);
      });
  };
  return <FormSign title="Login" functionValue={signIn} />;
};

export default SignIn;
