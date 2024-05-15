import { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../contexts/LanguageContext";

export const Footer = () => {
  const { language } = useContext(LanguageContext);
  return (
    <footer className="bg-violet-900">
      <div className="p-4 sm:px-8 md:px-16">
        <div className="mx-auto flex h-max max-w-screen-xl justify-between">
          <div>
            <ul>
              <li className="mb-1">
                <Link
                  className="font-light hover:font-bold dark:text-white xl:text-xl"
                  to="/"
                >
                  {language === "en" ? "Home" : "Beranda"}
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="font-light hover:font-bold dark:text-white xl:text-xl"
                  to="/about"
                >
                  {language === "en" ? "About" : "Tentang"}
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="font-light hover:font-bold dark:text-white xl:text-xl"
                  to="/articles"
                >
                  {language === "en" ? "Articles" : "Artikel"}
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="font-light hover:font-bold dark:text-white xl:text-xl"
                  to="/#FAQ"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <img
              className="mx-auto mb-1 w-14 rounded dark:border-black"
              src="/public/logo.jpg"
              alt=""
            />
            <h2 className="text- font-bold dark:text-white xl:text-xl">
              MindSpace
            </h2>
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-black">
        <p className="p-2 text-center text-sm font-light dark:text-white xl:text-lg">
          &copy;2024 - MindSpace
        </p>
      </div>
    </footer>
  );
};
