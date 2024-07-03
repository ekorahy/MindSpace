import { Route, Routes, useNavigate } from "react-router-dom";
import { Add } from "./pages/Add";
import { useEffect } from "react";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import { Archived } from "./pages/Archived";
import { Detail } from "./pages/Detail";
import Navigation from "./components/molecules/Navigation";
import NavSide from "./components/molecules/NavSide";
import { useDispatch, useSelector } from "react-redux";
import { asyncPreloadProcess } from "./states/isPreload/action";
import { asyncUnsetAuthUser } from "./states/authUser/action";
import Loading from "./components/atoms/Loading";

export const App = () => {
  const navigate = useNavigate();
  const { authUser = null, isPreload = false } = useSelector(
    (states) => states,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  function onLogout() {
    dispatch(asyncUnsetAuthUser());
    navigate("/");
  }

  if (isPreload) {
    return <p>Loading ...</p>;
  }

  if (authUser === null) {
    return (
      <>
        <Loading />
        <main className="flex min-h-screen items-center p-8">
          <div className="mx-auto w-full sm:w-3/4 lg:max-w-6xl">
            <Routes>
              <Route path="/*" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>
        </main>
      </>
    );
  } else {
    return (
      <>
        <Loading />
        <header className="w-full lg:hidden">
          <Navigation user={authUser} logout={onLogout} />
        </header>
        <main className="mx-auto max-w-7xl p-4 sm:px-8">
          <div className="flex gap-8">
            <aside className="hidden lg:fixed lg:block">
              <NavSide user={authUser} logout={onLogout} />
            </aside>
            <div className="w-full lg:ml-52">
              <Routes>
                <Route path="/" element={<Home name={authUser.name} />} />
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
