import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

export const About = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div>
      <h2 className="mb-4 text-lg font-bold dark:text-white xl:text-2xl">
        MindSpace
      </h2>
      <img
        className="mx-auto mb-2 w-full rounded sm:w-60 xl:mb-4"
        src="/logo.jpg"
        alt=""
      />
      <p className="dark:text-white xl:text-xl">
        {language === "en"
          ? "is a free, easy-to-use, and secure app for managing personal data notes."
          : "adalah aplikasi gratis, mudah digunakan, dan aman untuk mengelola catatan data pribadi."}
      </p>
    </div>
  );
};
