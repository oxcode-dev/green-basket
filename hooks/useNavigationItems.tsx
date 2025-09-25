import { ShoppingBagIcon, HomeIcon, BookmarkIcon, MapIcon, Cog8ToothIcon, ArrowLeftStartOnRectangleIcon } from '@heroicons/react/24/outline';

type NavigationProp = {
    link: string,
    label: string,
    icon?: React.JSX.Element,
};


export function useNavigationItems() {
    const navigationItems :NavigationProp[] = [
        {
            icon: <HomeIcon className="size-6" />,
            link: "/dashboard",
            label: "Dashboard",
        },
        {
            icon: <MapIcon className="size-6" />,
            link: "/dashboard/addresses",
            label: "My Addresses",
        },
        {
            icon: <ShoppingBagIcon className="size-6" />,
            link: "/dashboard/orders",
            label: "My Orders",
        },
        {
            icon: <BookmarkIcon className="size-6" />,
            link: "/dashboard/wishlists",
            label: "Wishlists",
        },
        {
            icon: <Cog8ToothIcon className="size-6" />,
            link: "/dashboard/account",
            label: "Account Management",
        },
        {
            icon: <ArrowLeftStartOnRectangleIcon className="size-6" />,
            link: "/logout",
            label: "Sign out",
        },
        
    ]

    const appNavigationItems :NavigationProp[] = [
        { link: "/", label: "Home" },
        { link: "/about", label: "About" },
        { link: "/shop", label: "Shop" },
        { link: "/contact", label: "Contact" },
    ]

    return { navigationItems, appNavigationItems } as const;
}