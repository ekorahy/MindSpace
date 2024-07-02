import PropTypes from "prop-types";
import NavList from "./NavList";
import { RiLogoutBoxLine } from "react-icons/ri";

export default function NavSide({ user, logout }) {
  return (
    <nav className="w-40">
      <div className="border-b border-dashed pb-4 text-center">
        <img
          className="mx-auto mb-2 w-20"
          src="/default_avatar.png"
          alt="default avatar image"
        />
        <h2 className="text-lg font-bold">{user.name}</h2>
        <p>{user.email}</p>
      </div>
      <div className="flex flex-col gap-2 border-b border-dashed py-4">
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
    </nav>
  );
}

NavSide.propTypes = {
  user: PropTypes.objectOf(PropTypes.string).isRequired,
  logout: PropTypes.func.isRequired,
};
