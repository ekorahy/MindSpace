import PropTypes from "prop-types";
import Lottie from "lottie-react";
import Robot from "../../assets/animation/Robot.json";

export const Welcome = ({ name }) => {
  return (
    <div className="mb-8 flex items-center justify-between rounded-md bg-gradient-to-r from-white to-emerald-100">
      <div>
        <h2 className="mb-2 font-lato text-xl font-bold sm:text-3xl lg:text-5xl">
          Welcome back{" "}
          <span className="font-bold text-emerald-400">{name}</span>
        </h2>
        <p className="sm:text-xl lg:text-3xl">Have a nice day🎉</p>
      </div>
      <div className="w-40 sm:w-60">
        <Lottie animationData={Robot} loop={true} />
      </div>
    </div>
  );
};

Welcome.propTypes = {
  name: PropTypes.string.isRequired,
};
