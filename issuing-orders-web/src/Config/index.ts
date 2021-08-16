import RouteItem from "../model/RouteItemModel";
import Home from "../pages/Home/Home";
import OrderForm from "../pages/Order/OrderForm";
import OrderSearch from "../pages/Order/OrderSearch";

export const routes: Array<RouteItem> = [
  {
    key: "router-home",
    title: "Home",
    path: "/",
    component: Home,
    showInMenu: true
  },
  {
    key: "router-order-search",
    title: "Pedidos",
    path: "/order",
    component: OrderSearch,
    showInMenu: true
  },
  {
    key: "router-order-form",
    title: "Pedidos",
    path: "/order-form",
    component: OrderForm,
    showInMenu: false
  },
  {
    key: "router-order-form-edit",
    title: "Pedidos",
    path: "/order-form/:id",
    component: OrderForm,
    showInMenu: false
  },
];