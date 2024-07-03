import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { asyncSetTheme } from "../../states/darkMode/action";
import { GoSun, GoMoon } from "react-icons/go";

export default function ToggleTheme() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    dispatch(asyncSetTheme(newTheme));
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    dispatch(asyncSetTheme(savedTheme));
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, [dispatch]);

  return (
    <button
      className="rounded-md border p-2 text-lg hover:bg-slate-100 dark:border-zinc-800 dark:text-white dark:hover:bg-zinc-800"
      onClick={toggleTheme}
    >
      {theme === "light" ? <GoSun /> : <GoMoon />}
    </button>
  );
}
