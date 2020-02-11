import { UpdateFunctionWithMethods } from 'hybrids'

export interface Route {
  path: string
  name: string
  component: UpdateFunctionWithMethods<HTMLElement>
}

export interface HybridRouter extends HTMLElement {
  routes: Route[]
  currentPath: string
}
