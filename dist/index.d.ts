import { RouterOptions, HybridRouter } from './interfaces';
export declare function createRouter(hybrids: any): ({ mode, routes, shadowRoot, }: RouterOptions) => hybrids.Hybrids<HybridRouter>;
export declare function push(host: HybridRouter, path: string): void;
