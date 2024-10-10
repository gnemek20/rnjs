import { ReactNode } from "react";
import { imageType } from "./publicTypes";

export type webNames = 'profile' | 'portfolio' | undefined;

export interface webProps {
  rendering: boolean,
  selected: boolean,
  selectWeb: Function,
  closeWeb: Function,
  children?: ReactNode
}

export interface customWebProps {
  rendering: webProps['rendering'],
  selected: webProps['selected'],
  selectWeb: webProps['selectWeb'],
  closeWeb: webProps['closeWeb'],
  children?: webProps['children']
}

export interface webAttribute {
  name: webNames,
  icon: imageType,
  openWeb: Function,
  closeWeb: Function,
  component: (props: customWebProps) => JSX.Element | false
}