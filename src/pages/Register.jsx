import { Link, useNavigate } from "react-router-dom";
import { RegisterInput } from "../components/molecules/RegisterInput";
import Lottie from "lottie-react";
import Rocket from "../assets/animation/Rocket.json";
import Logo from "../components/atoms/Logo";
import { useDispatch } from "react-redux";
import asyncRegisterUser from "../states/user/action";

export const Register = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  async function onRegister(name, email, password) {
    dispatch(asyncRegisterUser({ name, email, password }, navigate));
  }

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
      <div className="w-full rounded-md">
        <div className="mx-auto mb-8 w-max">
          <Logo />
        </div>
        <div className="mb-4">
          <h2 className="font-lato text-2xl font-black">Register Form</h2>
          <p className="font-light">
            Please fill in the form below to create a new account.
          </p>
        </div>
        <RegisterInput signUp={onRegister} />
        <p className="mt-4 font-light">
          Already have an account?{" "}
          <Link className="font-bold underline hover:text-emerald-400" to="/">
            Log in
          </Link>
        </p>
      </div>
      <div className="hidden w-full scale-x-[-1] items-center justify-center lg:flex">
        <Lottie animationData={Rocket} loop={true} />
      </div>
    </section>
  );
};
