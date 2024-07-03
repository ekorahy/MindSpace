import { LoginInput } from "../components/molecules/LoginInput";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Lottie from "lottie-react";
import Rocket from "../assets/animation/Rocket.json";
import Logo from "../components/atoms/Logo";
import { useDispatch } from "react-redux";
import { asyncSetAuthUser } from "../states/authUser/action";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function onLogin(email, password) {
    dispatch(asyncSetAuthUser({ email, password }, navigate));
  }

  return (
    <section className="grid w-full grid-cols-1 lg:grid-cols-2">
      <div className="hidden w-4/5 items-center justify-center lg:flex">
        <Lottie animationData={Rocket} loop={true} />
      </div>
      <div className="w-full rounded-md">
        <div className="mx-auto mb-4 w-max">
          <Logo />
        </div>
        <div className="mb-4">
          <h2 className="font-lato text-2xl font-black">Login Form</h2>
          <p>Please enter your email and password to log in.</p>
        </div>
        <LoginInput login={onLogin} />
        <p className="mt-4">
          Don&apos;t have an account yet?{" "}
          <Link
            className="font-bold underline hover:text-emerald-400"
            to="/register"
          >
            Register here
          </Link>
        </p>
      </div>
    </section>
  );
};

Login.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};
