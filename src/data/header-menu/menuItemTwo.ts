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
        href: "/about-us",
        static:true
    },
    {
        title: "Pages",
        href: "#",
        static:true,
        subItems: [
            { title: "Industries", href: "/industries" },
            { title: "Capabilities", href: "/capabilities" },
            { title: "Gallery", href: "/gallery" }
        ],
    },
    {
        title: "Contact Us",
        href: "/contact",
        static:false
    }
];

export default menuItemsTwo;