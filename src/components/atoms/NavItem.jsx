import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

export default function NavItem({ name, route, icon }) {
  return (
    <NavLink
      to={route}
      className={({ isActive }) =>
        `flex items-center gap-2 space-x-2 rounded-md p-2 lg:p-3 ${isActive ? "bg-emerald-400" : "hover:bg-slate-100 dark:hover:bg-zinc-800"}`
      }
    >
      <span>{icon}</span> {name}
    </NavLink>
  );
}

NavItem.propTypes = {
  name: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};
