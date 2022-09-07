import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface IMenuItem {
  children: ReactNode;
  img: StaticImageData;
  onClick: any;
}

export interface ITable {
  title: string;
}

export interface IDropdown {
  id: string;
  header: string;
  menuItems?: IMenuItem[];
  data: IMenuItem;
  setData: any;
}

export interface IMenuItem {
  title: string;
  accessor: "smartphones" | "laptops";
}

export interface IFlex {
  flexStart?: boolean;
  spaceBetween?: boolean;
  gap?: string;
  alignItems?: string;
  margin?: string;
  fullHeight?: boolean;
}

export interface IDropdownItem {
  children: string;
  onClick: any;
}
