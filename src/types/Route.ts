import { FC } from "react";
export interface IRoute {
  path: string;
  exact: boolean;
  name: string;
  component: FC;
}
