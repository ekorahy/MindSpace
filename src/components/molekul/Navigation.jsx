import { Link } from "react-router-dom";
import { RiMenu3Fill, RiLogoutBoxRLine } from "react-icons/ri";
import { useContext, useState } from "react";
import { VscAccount } from "react-icons/vsc";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import PropTypes from "prop-types";
import { HashLink } from "react-router-hash-link";
import { ThemeContext } from "../../contexts/ThemeContext";
import { LanguageContext } from "../../contexts/LanguageContext";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";

export const Navigation = ({ logout, authedUser }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, toggleLanguage } = useContext(LanguageContext);
  function onMenuHandler() {
    setOpenMenu(!openMenu);
  }

  function onProfileHandler() {
    setOpenProfile(!openProfile);
  }

  return (
    <nav className="relative mx-auto max-w-screen-xl">
      <div className="mx-auto flex max-w-screen-xl justify-between">
        <Link className="flex items-center gap-1" to="/">
          <img
            className="h-10 rounded sm:h-8"
            src="/logo.jpg"
            alt="logo image"
          />{" "}
          <span className="hidden text-xl font-bold text-violet-400 sm:block">
            MindSpace
          </span>
        </Link>
        <button
          className="px-3 text-xl dark:text-white lg:hidden"
          onClick={onMenuHandler}
        >
          <RiMenu3Fill />
        </button>
        {authedUser !== null ? (
          <>
            <div className="hidden lg:block">
              <div className="flex items-center gap-4 dark:text-white">
                <Link className="p-2 hover:text-violet-400" to={"/"}>
                  {language === "en" ? "Home" : "Beranda"}
                </Link>
                <Link className="p-2 hover:text-violet-400" to={"/archived"}>
                  {language === "en" ? "Archived" : "Diarsipkan"}
                </Link>
                <Link className="p-2 hover:text-violet-400" to={"/add"}>
                  {language === "en" ? "Add" : "Tambah"}
                </Link>
              </div>
            </div>
            <button
              onClick={() => onProfileHandler()}
              className="hidden items-center font-bold dark:text-white lg:flex"
            >
              <VscAccount className="inline text-2xl" />
              {!openProfile ? (
                <MdOutlineArrowDropDown className="text-2xl" />
              ) : (
                <MdOutlineArrowDropUp className="text-2xl" />
              )}
            </button>
          </>
        ) : (
          <>
            <div className="hidden lg:block">
              <div className="flex items-center gap-4">
                <Link
                  className="p-2 hover:text-violet-400 dark:text-white dark:hover:text-violet-400"
                  to={"/"}
                >
                  {language === "en" ? "Home" : "Beranda"}
                </Link>
                <Link
                  className="p-2 hover:text-violet-400 dark:text-white dark:hover:text-violet-400"
                  to={"/about"}
                >
                  {language === "en" ? "About" : "Tentang"}
                </Link>
                <Link
                  className="p-2 hover:text-violet-400 dark:text-white dark:hover:text-violet-400"
                  to={"/articles"}
                >
                  {language === "en" ? "Articles" : "Artikel"}
                </Link>
                <HashLink
                  smooth
                  className="p-2 hover:text-violet-400 dark:text-white dark:hover:text-violet-400"
                  to={"/#FAQ"}
                >
                  {language === "en" ? "FAQ" : "FAQ"}
                </HashLink>
              </div>
            </div>
            <div className="hidden items-center gap-4 lg:flex">
              <div className="flex items-center gap-2">
                <Link
                  className="border border-violet-400 bg-violet-400 px-4 py-1 text-white hover:border-violet-500 hover:bg-violet-500 hover:text-black dark:text-black dark:hover:text-white"
                  to={"/login"}
                >
                  {language === "en" ? "Login" : "Masuk"}
                </Link>
                <Link
                  className="border border-violet-400 px-4 py-1 hover:border-violet-500 hover:bg-violet-500 hover:text-white dark:text-white dark:hover:text-black"
                  to={"/register"}
                >
                  {language === "en" ? "Register" : "Daftar"}
                </Link>
              </div>
              <div className="flex gap-2">
                <button
                  className="border p-2 hover:border-violet-500 hover:bg-violet-500 hover:text-white dark:text-white dark:hover:text-black"
                  onClick={toggleTheme}
                >
                  {theme === "light" ? <CiLight /> : <CiDark />}
                </button>
                <button
                  className="flex items-center gap-1 border p-2 text-sm hover:bg-violet-500 hover:text-white dark:text-white dark:hover:text-black"
                  onClick={toggleLanguage}
                >
                  {language === "en" ? (
                    <>
                      <img
                        className="w-4"
                        src="/public/flags/en-flag.png"
                        alt=""
                      />
                      EN
                    </>
                  ) : (
                    <>
                      <img
                        className="w-4"
                        src="/public/flags/id-flag.png"
                        alt=""
                      />
                      ID
                    </>
                  )}
                </button>
              </div>
            </div>
          </>
        )}
      </div>
      <div
        className={`${
          !openMenu && "hidden"
        } fixed right-4 top-16 flex w-full justify-end`}
      >
        {authedUser !== null ? (
          <div className="z-50 h-max w-40 rounded-md bg-slate-50 p-4 dark:bg-slate-950">
            <div className="mx-auto w-full border-b pb-4 text-center dark:text-white">
              <div className="mx-auto w-max text-4xl">
                <VscAccount />
              </div>
              <h2 className="font-bold">{authedUser.name}</h2>
              <p className="font-light">{authedUser.email}</p>
            </div>
            <ul className="mt-2">
              <li className="mb-1 border-b p-2 hover:bg-violet-400 hover:text-white dark:text-white dark:hover:text-black">
                <Link to="/">{language === "en" ? "Home" : "Beranda"}</Link>
              </li>
              <li className="mb-1 border-b p-2 hover:bg-violet-400 hover:text-white dark:text-white dark:hover:text-black">
                <Link to="/archived">
                  {language === "en" ? "Archived" : "Diarsipkan"}
                </Link>
              </li>
              <li className="mb-1 border-b p-2 hover:bg-violet-400 hover:text-white dark:text-white dark:hover:text-black">
                <Link to="/add">{language === "en" ? "Add" : "Tambah"}</Link>
              </li>
              <li className=" mb-4 mt-4 bg-rose-400 p-2 text-center text-white hover:bg-rose-500 dark:text-black">
                <button onClick={() => logout()}>
                  <RiLogoutBoxRLine className="inline" />{" "}
                  {language === "en" ? "Log out" : "Keluar"}
                </button>
              </li>
              <li className="mx-auto flex w-max gap-2">
                <button
                  className="border p-2 hover:bg-violet-400 hover:text-white dark:hover:text-black"
                  onClick={toggleTheme}
                >
                  {theme === "light" ? (
                    <CiLight />
                  ) : (
                    <CiDark className="dark:text-white" />
                  )}
                </button>
                <button
                  className="flex items-center gap-1 border p-2 text-sm hover:bg-violet-400 hover:text-white dark:text-white dark:hover:text-black"
                  onClick={toggleLanguage}
                >
                  {language === "en" ? (
                    <>
                      <img
                        className="w-4"
                        src="/public/flags/en-flag.png"
                        alt=""
                      />
                      EN
                    </>
                  ) : (
                    <>
                      <img
                        className="w-4"
                        src="/public/flags/id-flag.png"
                        alt=""
                      />
                      ID
                    </>
                  )}
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="z-20 h-max w-40 rounded-md bg-slate-50 dark:bg-slate-950">
            <ul className="p-4">
              <li className="mb-1 border-b p-2 hover:bg-violet-400 hover:text-white dark:text-white dark:hover:text-black">
                <Link to="/">{language === "en" ? "Home" : "Beranda"}</Link>
              </li>
              <li className="mb-1 border-b p-2 hover:bg-violet-400 hover:text-white dark:text-white dark:hover:text-black">
                <Link to="/about">
                  {language === "en" ? "About" : "Tentang"}
                </Link>
              </li>
              <li className="mb-1 border-b p-2 hover:bg-violet-400 hover:text-white dark:text-white dark:hover:text-black">
                <Link to="/articles">
                  {language === "en" ? "Articles" : "Artikel"}
                </Link>
              </li>
              <li className="mb-1 border-b p-2 hover:bg-violet-400 hover:text-white dark:text-white dark:hover:text-black">
                <HashLink smooth to={"/#FAQ"}>
                  FAQ
                </HashLink>
              </li>
              <li className="mb-1 mt-4 bg-violet-400 p-2 text-center text-white hover:bg-violet-500 dark:text-black dark:hover:text-white">
                <Link to="/login">{language === "en" ? "Login" : "Masuk"}</Link>
              </li>
              <li className="mb-4 border border-violet-400 p-2 text-center hover:border-violet-500 hover:bg-violet-500 hover:text-white dark:text-white dark:hover:text-black">
                <Link to="/register">
                  {language === "en" ? "Register" : "Daftar"}
                </Link>
              </li>
              <li className="mx-auto flex w-max gap-2">
                <button className="border p-2" onClick={toggleTheme}>
                  {theme === "light" ? (
                    <CiLight />
                  ) : (
                    <CiDark className="dark:text-white" />
                  )}
                </button>
                <button
                  className="flex items-center gap-1 border p-2 text-sm dark:text-white"
                  onClick={toggleLanguage}
                >
                  {language === "en" ? (
                    <>
                      <img
                        className="w-4"
                        src="/public/flags/en-flag.png"
                        alt=""
                      />
                      EN
                    </>
                  ) : (
                    <>
                      <img
                        className="w-4"
                        src="/public/flags/id-flag.png"
                        alt=""
                      />
                      ID
                    </>
                  )}
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className={`${!openProfile && "hidden"} absolute right-0`}>
        {authedUser !== null && (
          <div className="z-50 h-max w-60 rounded-md bg-slate-50 p-8 dark:bg-slate-950">
            <div className="mx-auto w-full border-b pb-4 text-center dark:text-white">
              <div className="mx-auto mb-2 w-max text-6xl">
                <VscAccount />
              </div>
              <h2 className="text-xl font-bold">{authedUser.name}</h2>
              <p className="font-light">{authedUser.email}</p>
            </div>
            <button
              className="mb-4 mt-4 w-full bg-rose-400 p-2 text-center text-white hover:bg-rose-500 dark:text-black"
              onClick={() => logout()}
            >
              <RiLogoutBoxRLine className="inline" />{" "}
              {language === "en" ? "Log out" : "Keluar"}
            </button>
            <div className="mx-auto flex w-max gap-2">
              <button
                className="border p-2 hover:bg-violet-400 hover:text-white dark:text-white dark:hover:text-black"
                onClick={toggleTheme}
              >
                {theme === "light" ? <CiLight /> : <CiDark />}
              </button>
              <button
                className="flex items-center gap-1 border p-2 text-sm hover:bg-violet-400 hover:text-white dark:text-white dark:hover:text-black"
                onClick={toggleLanguage}
              >
                {language === "en" ? (
                  <>
                    <img
                      className="w-4"
                      src="/public/flags/en-flag.png"
                      alt=""
                    />
                    EN
                  </>
                ) : (
                  <>
                    <img
                      className="w-4"
                      src="/public/flags/id-flag.png"
                      alt=""
                    />
                    ID
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  authedUser: PropTypes.object,
};
