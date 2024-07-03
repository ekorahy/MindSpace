import { useState } from "react";
import NavList from "./NavList";
import { RiMenu5Fill, RiLogoutBoxLine } from "react-icons/ri";
import PropTypes from "prop-types";
import ToggleTheme from "../atoms/ToggleTheme";

export default function Navigation({ user, logout }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="mx-auto p-4 sm:px-8 lg:max-w-6xl">
      <div className="flex items-center justify-between">
        <img className="w-10 rounded-md" src="/logo.png" alt="logo image" />
        <button
          onClick={toggleMenu}
          className="rounded-md p-1 text-3xl hover:bg-slate-100 dark:hover:bg-zinc-900"
        >
          <RiMenu5Fill />
        </button>
      </div>
      <div
        className={`${menuOpen ? "block" : "hidden"} sm:60 absolute right-4 z-20 w-56 rounded-md bg-white px-4 py-8 shadow dark:bg-zinc-900 sm:right-8`}
      >
        <div className="mb-2 border-b border-dashed pb-2 text-center dark:border-zinc-800">
          <img
            className="mx-auto mb-2 w-24"
            src="/default_avatar.png"
            alt="default avatar image"
          />
          <h2 className="font-bold">{user.name}</h2>
          <p>{user.email}</p>
        </div>
        <div className="my-2 flex flex-col gap-2 border-b border-dashed pb-2 dark:border-zinc-800">
          <NavList />
        </div>
        <div className="my-2 border-b border-dashed pb-2 dark:border-zinc-800">
          <button
            className="flex items-center gap-2 rounded-md p-2 text-red-400 hover:font-bold hover:text-red-500"
            onClick={logout}
          >
            <span>
              <RiLogoutBoxLine />
            </span>
            Log out
          </button>
        </div>
        <div className="mx-auto w-max pt-4">
          <ToggleTheme />
        </div>
      </div>
    </nav>
  );
}

Navigation.propTypes = {
  user: PropTypes.objectOf(PropTypes.string).isRequired,
  logout: PropTypes.func.isRequired,
};
