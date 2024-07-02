import { RiHome5Line, RiArchiveDrawerLine } from "react-icons/ri";

export const navigation = [
  {
    id: "nav-1",
    name: "Home",
    route: "/",
    icon: <RiHome5Line />,
  },
  {
    id: "nav-2",
    name: "Archived",
    route: "/archived",
    icon: <RiArchiveDrawerLine />,
  },
];
