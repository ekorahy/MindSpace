import Lottie from "lottie-react";
import NotFound from "../../assets/animation/NotFound.json";

export default function NotFoundImage() {
  return (
    <>
      <div className="mx-auto w-72 sm:w-96">
        <Lottie animationData={NotFound} loop={true} />
      </div>
      <p className="text-center font-bold text-red-400">Page Not Found.</p>
    </>
  );
}
