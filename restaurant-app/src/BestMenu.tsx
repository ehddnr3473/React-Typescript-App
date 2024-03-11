import React from "react";
import { Menu } from "./model/restaurant";

/*
  type extension
  type MyType = Other Type or Interface & {
    ...
  }
*/

interface OwnProps extends Omit<Menu, "price"> {
  showBestMenu(name: string):void
}

const BestMenu: React.FC<OwnProps> = ({name, category, showBestMenu}) => {
  return (
    <div>{name}</div>
  );
};

export default BestMenu;