import PropTypes from "prop-types";
import NavList from "./NavList";
import { RiLogoutBoxLine } from "react-icons/ri";
import ToggleTheme from "../atoms/ToggleTheme";

export default function NavSide({ user, logout }) {
  return (
    <nav className="flex h-screen w-40 flex-col justify-between">
      <div>
        <div className="border-b border-dashed pb-4 text-center dark:border-zinc-800">
          <img
            className="mx-auto mb-2 w-20"
            src="/default_avatar.png"
            alt="default avatar image"
          />
          <h2 className="text-lg font-bold">{user.name}</h2>
          <p>{user.email}</p>
        </div>
        <div className="flex flex-col gap-2 border-b border-dashed py-4 dark:border-zinc-800">
          <NavList />
        </div>
        <div className="py-4">
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
      <div className="mx-auto mb-10">
        <ToggleTheme />
      </div>
    </nav>
  );
}

NavSide.propTypes = {
  user: PropTypes.objectOf(PropTypes.string).isRequired,
  logout: PropTypes.func.isRequired,
};
