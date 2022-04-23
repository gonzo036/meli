/**
    * Author: @gonzo036
    * Date: 04/22/2022
    * Ticket: TICKET-XXXXXXXX
    * Description: this file contains config routes
*/
import ThemeSearch from "../themes/themeSearch";
import Home from "../pages/Home";
import Search from "../pages/Search";
import Detail from "../pages/Detail";
import NotFound404 from "../pages/NotFound404"

export const routesClient = [
    {
        path: "/",
        Layout: ThemeSearch,
        Component: Home,
    },
    {
        path: "/items/search",
        Layout: ThemeSearch,
        Component: Search,
    },
    {
        path: "/items/:id",
        Layout: ThemeSearch,
        Component: Detail,
    },
    {
        path: "/*",
        Layout: ThemeSearch,
        Component: NotFound404,
    },
];
