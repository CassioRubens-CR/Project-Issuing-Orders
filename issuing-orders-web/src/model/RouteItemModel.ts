import { FC } from "react";

interface RouteItem {
  key: string;
  title: string;
  path: string;
  component?: FC<{}>;
  showInMenu: boolean;
}

export default RouteItem;