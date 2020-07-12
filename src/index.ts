import { Hybrids, html, render } from 'hybrids';
import { getCurrentPath, hash, unhash } from './util';
import { RouterOptions, HybridRouter } from './interfaces';

const template = (host: HybridRouter) => {
  const historyMode = host.mode === 'history';
  const matchingRoute = historyMode
    ? host.routes.find((route) => unhash(route.path) === host.currentPath)
    : host.routes.find((route) => hash(route.path) === host.currentPath);

  return matchingRoute ? matchingRoute.component : html``;
};

export function Router({ mode = 'hash', routes = [], shadowRoot = true }: RouterOptions): Hybrids<HybridRouter> {
  return {
    mode,
    routes,
    currentPath: getCurrentPath(window),
    render: render(template, { shadowRoot }),
  };
}

export function push(host: HybridRouter, path: string): void {
  const hashed = hash(path);
  const unhashed = unhash(path);
  const currentPath = getCurrentPath(window);

  if (currentPath === hashed || currentPath === unhashed) return;

  const { state } = window.history;
  const { pathname } = window.location;
  const historyMode = host.mode === 'history';

  host.currentPath = historyMode ? unhashed : hashed;

  if (historyMode) window.history.pushState(state, pathname, host.currentPath);
  else window.location.href = host.currentPath;

  window.addEventListener('popstate', () => (host.currentPath = getCurrentPath(window)));
}
