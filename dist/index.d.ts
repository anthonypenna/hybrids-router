import { Hybrids } from 'hybrids';
import { RouterOptions, HybridRouter } from './interfaces';
export declare function Router({ mode, routes, shadowRoot }: RouterOptions): Hybrids<HybridRouter>;
export declare function push(host: HybridRouter, path: string): void;
