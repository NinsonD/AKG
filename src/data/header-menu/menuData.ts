import { MenuItem } from "@/types/menu-d-t";

// Simplified ARK header menu: Home | About Us | Pages (Industries, Capabilities, Gallery) | Contact Us
const headerMenuData: MenuItem[] = [
  {
    id: 1,
    title: "Home",
    link: "/",
    active: true,
    hasDropdown: false,
    pluseIncon: false,
  },
  {
    id: 2,
    title: "About Us",
    link: "/about-us",
    active: false,
    hasDropdown: false,
    pluseIncon: false,
  },
  {
    id: 3,
    title: "Pages",
    link: "#",
    active: false,
    hasDropdown: true,
    children: true,
    pluseIncon: true,
    submenus: [
      { title: "Industries", link: "/industries" },
      { title: "Capabilities", link: "/capabilities" },
      { title: "Gallery", link: "/gallery" }
    ]
  },
  {
    id: 4,
    title: "Contact Us",
    link: "/contact",
    active: false,
    hasDropdown: false,
    pluseIncon: false,
  }
];

export default headerMenuData;

