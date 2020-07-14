import { UpdateFunctionWithMethods } from 'hybrids';
import { RouterMode } from '../types';
export interface Route {
    path: string;
    component: UpdateFunctionWithMethods<HTMLElement>;
}
export interface RouterOptions {
    mode: RouterMode;
    routes: Route[];
    shadowRoot: boolean;
}
export interface HybridRouter extends HTMLElement {
    mode: RouterMode;
    routes: Route[];
    currentPath: string;
}
