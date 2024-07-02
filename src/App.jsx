import { Route, Routes, useNavigate } from "react-router-dom";
import { Add } from "./pages/Add";
import { useEffect, useMemo, useState } from "react";
import { getUserLogged, putAccessToken } from "./data/remote/remote";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Main } from "./pages/Main";
import { Archived } from "./pages/Archived";
import { Detail } from "./pages/Detail";
import { ThemeContext } from "./contexts/ThemeContext";
import { LanguageContext } from "./contexts/LanguageContext";

export const App = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en",
  );
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "id" : "en";
    localStorage.setItem("language", newLanguage);
    setLanguage(newLanguage);
  };

  const themeContextValue = useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  }, [theme]);

  const languageContextValue = useMemo(() => {
    return {
      language,
      toggleLanguage,
    };
  }, [language]);

  useEffect(() => {
    getUserLogged().then(({ data }) => {
      setAuthedUser(data);
      setInitializing(false);
    });
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("class", theme);
  }, [theme]);

  function onLogoutHandler() {
    setAuthedUser(null);
    putAccessToken("");
    navigate("/");
  }

  async function onLoginSucces({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();

    setAuthedUser(data);
  }

  if (initializing) {
    return null;
  }

  if (authedUser === null) {
    return (
      <>
        <ThemeContext.Provider value={themeContextValue}>
          <LanguageContext.Provider value={languageContextValue}>

            <main className="mt-16 p-4 sm:px-8 md:mt-32 md:px-16">
              <div className="mx-auto max-w-screen-xl">
                <Routes>
                  <Route
                    path="/*"
                    element={<Login loginSuccess={onLoginSucces} />}
                  />
                  <Route path="/register" element={<Register />} />
                </Routes>
              </div>
            </main>
          </LanguageContext.Provider>
        </ThemeContext.Provider>
      </>
    );
  } else {
    return (
      <>
        <ThemeContext.Provider value={themeContextValue}>
          <LanguageContext.Provider value={languageContextValue}>

            <main className="mt-20 p-4 sm:px-8 md:mt-32 md:px-16 xl:min-h-screen">
              <div className="mx-auto max-w-screen-xl">
                <Routes>
                  <Route path="/" element={<Main name={authedUser.name} />} />
                  <Route path="/detail/:id" element={<Detail />} />
                  <Route path="/add" element={<Add />} />
                  <Route path="/archived" element={<Archived />} />
                </Routes>
              </div>
            </main>
          </LanguageContext.Provider>
        </ThemeContext.Provider>
      </>
    );
  }
};
