import { Hybrids, html } from 'hybrids'
import { getCurrentPath, hash } from './util'
import { RouterOptions, HybridRouter } from './interfaces'

export function Router(options: RouterOptions): Hybrids<HybridRouter> {
  return {
    mode: options.mode || 'history',
    routes: options.routes || [],
    currentPath: getCurrentPath(),
    render: host => {
      const historyMode = host.mode === 'history'
      const matchingRoute = historyMode
        ? host.routes.find(route => route.path === host.currentPath)
        : host.routes.find(route => hash(route.path) === host.currentPath)

      return matchingRoute.component || html``
    }
  }
}

export function push(host: HybridRouter, path: string): void {
  if (window && 'location' in window && 'history' in window) {
    if (getCurrentPath() === path) return

    const { state } = window.history
    const { pathname } = window.location
    const historyMode = host.mode === 'history'

    host.currentPath = historyMode ? path : hash(path)
    window.history.pushState(state, pathname, host.currentPath)

    window.addEventListener('popstate', () => {
      const currentPath = getCurrentPath()
      host.currentPath = currentPath
    })
  }
}
