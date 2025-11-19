// Define menu data
interface MenuItem {
    title: string;
    href: string;
    subItems?: MenuItem[];
    static?:boolean
};

// Simplified menu for ARK
const menuItemsTwo: MenuItem[] = [
    {
        title: "Home",
        href: "/",
        static:true
    },
    {
        title: "About Us",
        href: "/about-modern-light",
        static:true
    },
    {
        title: "Pages",
        href: "#",
        static:true,
        subItems: [
            { title: "Industries", href: "/portfolio-webgl-showcase" },
            { title: "Capabilities", href: "/portfolio-creative-skew-slider" },
            { title: "Gallery", href: "/brand-showcase-light" }
        ],
    },
    {
        title: "Contact Us",
        href: "/contact",
        static:false
    }
];

export default menuItemsTwo;