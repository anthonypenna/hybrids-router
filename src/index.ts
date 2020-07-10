import { Hybrids, html, render } from 'hybrids';
import { getCurrentPath, hash, unhash } from './util';
import { RouterOptions, HybridRouter } from './interfaces';

const template = (host: HybridRouter) => {
  const historyMode = host.mode === 'history';
  const matchingRoute = historyMode
    ? host.routes.find((route) => unhash(route.path) === host.currentPath)
    : host.routes.find((route) => hash(route.path) === host.currentPath);

  return matchingRoute.component || html``;
};

function Router(options: RouterOptions): Hybrids<HybridRouter> {
  return {
    mode: options.mode || 'history',
    routes: options.routes || [],
    currentPath: getCurrentPath(window),
    render: render(template, { shadowRoot: options.shadowRoot }),
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
  window.history.pushState(state, pathname, host.currentPath);
  window.addEventListener('popstate', () => (host.currentPath = getCurrentPath(window)));
}

export default Router;
