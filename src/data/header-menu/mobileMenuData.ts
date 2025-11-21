import { StaticImageData } from "next/image";

// Simplified mobile menu for ARK
interface MenuLink {
    title: string;
    link: string;
}

interface MenuItem {
    id: number;
    title: string;
    link: string;
    megaMenu?: boolean;
    columns?: { title: string; links: MenuLink[] }[];
}

const mobileMenuData: MenuItem[] = [
    {
        id: 1,
        title: "Home",
        link: "/",
        megaMenu: false
    },
    {
        id: 2,
        title: "About Us",
        link: "/about-us",
        megaMenu: false
    },
    {
        id: 3,
        title: "Pages",
        link: "#",
        megaMenu: true,
        columns: [
            {
                title: "Pages",
                links: [
                    { title: "Industries", link: "/industries" },
                    { title: "Capabilities", link: "/capabilities" },
                    { title: "Gallery", link: "/gallery" }
                ]
            }
        ]
    },
    {
        id: 4,
        title: "Contact Us",
        link: "/contact",
        megaMenu: false
    }
];

export default mobileMenuData;