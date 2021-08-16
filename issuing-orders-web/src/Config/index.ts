import RouteItem from "../model/RouteItemModel";
import Home from "../pages/Home";

export const routes: Array<RouteItem> = [
  {
    key: "router-home",
    title: "Home",
    path: "/",
    component: Home,
    showInMenu: true
  },
];