import { Route, Routes, useNavigate } from "react-router-dom";
import { Add } from "./pages/Add";
import { useEffect, useState } from "react";
import { getUserLogged, putAccessToken } from "./data/remote/remote";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import { Archived } from "./pages/Archived";
import { Detail } from "./pages/Detail";
import Navigation from "./components/molecules/Navigation";
import NavSide from "./components/molecules/NavSide";

export const App = () => {
  const navigate = useNavigate();
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    getUserLogged().then(({ data }) => {
      setAuthedUser(data);
      setInitializing(false);
    });
  }, []);

  function onLogout() {
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
        <main className="flex min-h-screen items-center p-8">
          <div className="mx-auto w-full sm:w-3/4 lg:max-w-6xl">
            <Routes>
              <Route
                path="/*"
                element={<Login loginSuccess={onLoginSucces} />}
              />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>
        </main>
      </>
    );
  } else {
    return (
      <>
        <header className="w-full lg:hidden">
          <Navigation user={authedUser} logout={onLogout} />
        </header>
        <main className="mx-auto max-w-6xl p-4 sm:px-8">
          <div className="flex gap-8">
            <aside className="hidden lg:block">
              <NavSide user={authedUser} logout={onLogout} />
            </aside>
            <div className="w-full">
              <Routes>
                <Route path="/" element={<Home name={authedUser.name} />} />
                <Route path="/detail/:id" element={<Detail />} />
                <Route path="/add" element={<Add />} />
                <Route path="/archived" element={<Archived />} />
              </Routes>
            </div>
          </div>
        </main>
      </>
    );
  }
};
