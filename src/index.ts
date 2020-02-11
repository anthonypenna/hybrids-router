import { Hybrids, html } from 'hybrids'
import { getCurrentPath } from './util'
import { Route, HybridRouter } from './interfaces'

export function Router(routes: Route[]): Hybrids<HybridRouter> {
  return {
    routes,
    currentPath: getCurrentPath(),
    render: host => {
      const matchingRoute = host.routes.find(route => route.path === host.currentPath)
      return matchingRoute.component || html``
    }
  }
}

export function push(host: HybridRouter, path: string): void {
  if (window && 'location' in window && 'history' in window) {
    const { state } = window.history
    const { pathname } = window.location
    host.currentPath = path
    window.history.pushState(state, pathname, path)

    window.addEventListener('popstate', () => {
      const currentPath = getCurrentPath()
      host.currentPath = currentPath
    })
  }
}
