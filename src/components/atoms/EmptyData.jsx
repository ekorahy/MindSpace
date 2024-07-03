import Lottie from "lottie-react";
import NoData from "../../assets/animation/NoData.json";

export default function EmptyData() {
  return (
    <>
      <div className="mx-auto w-72 sm:w-96">
        <Lottie animationData={NoData} loop={true} />
      </div>
      <p className="text-center font-bold text-red-400">Empty Data.</p>
    </>
  );
}
