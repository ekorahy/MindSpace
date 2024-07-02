import PropTypes from "prop-types";
import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";

export const Welcome = ({ name }) => {
  const { language } = useContext(LanguageContext);
  return (
    <div className="mb-4 dark:text-white">
      <h2 className="text-xl font-bold xl:text-3xl">
        {language === "en" ? "Welcome back" : "Selamat datang kembali "}{" "}
        <span className="text-violet-400">{name}</span>
      </h2>
      <p className="text-lg font-light xl:text-2xl">
        {language === "en" ? "Have a great day" : "Semoga harimu menyenangkan"}
        🎉
      </p>
    </div>
  );
};

Welcome.propTypes = {
  name: PropTypes.string.isRequired,
};
