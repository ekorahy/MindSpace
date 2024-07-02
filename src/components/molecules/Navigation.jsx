import { useState } from "react";
import NavList from "./NavList";
import { RiMenu5Fill, RiLogoutBoxLine } from "react-icons/ri";
import PropTypes from "prop-types";

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
          className="rounded-md p-1 text-3xl hover:bg-slate-100"
        >
          <RiMenu5Fill />
        </button>
      </div>
      <div
        className={`${menuOpen ? "block" : "hidden"} absolute right-4 z-20 w-48 bg-white px-4 py-8 shadow sm:right-8`}
      >
        <div className="mb-4 border-b border-dashed pb-4 text-center">
          <img
            className="mx-auto mb-2 w-24"
            src="/default_avatar.png"
            alt="default avatar image"
          />
          <h2 className="font-bold">{user.name}</h2>
          <p>{user.email}</p>
        </div>
        <div className="my-4 flex flex-col gap-2 border-b border-dashed pb-4">
          <NavList />
        </div>
        <div>
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
      </div>
    </nav>
  );
}

Navigation.propTypes = {
  user: PropTypes.objectOf(PropTypes.string).isRequired,
  logout: PropTypes.func.isRequired,
};
