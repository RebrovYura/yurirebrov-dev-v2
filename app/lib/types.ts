import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { IconType } from "react-icons";

export interface ILinks {
  name: string;
  url: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
}

export interface ISocialLinks {
  name: string;
  url: string;
}
