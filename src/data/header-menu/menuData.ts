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
    link: "/about-modern-light",
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
      { title: "Industries", link: "/portfolio-webgl-showcase" },
      { title: "Capabilities", link: "/portfolio-creative-skew-slider" },
      { title: "Gallery", link: "/brand-showcase-light" }
    ]
  },
  {
    id: 4,
    title: "Contact Us",
    link: "/contact-us-light",
    active: false,
    hasDropdown: false,
    pluseIncon: false,
  }
];

export default headerMenuData;

