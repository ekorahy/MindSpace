import { navigation } from "../../data/locale/navigation";
import NavItem from "../atoms/NavItem";

export default function NavList() {
  return (
    <>
      {navigation.map(({ id, name, route, icon }) => (
        <NavItem key={id} name={name} route={route} icon={icon} />
      ))}
    </>
  );
}
