import { html, render } from 'hybrids';
import { getCurrentPath, hash, unhash } from './util';
const template = (host) => {
    const historyMode = host.mode === 'history';
    const matchingRoute = historyMode
        ? host.routes.find((route) => unhash(route.path) === host.currentPath)
        : host.routes.find((route) => hash(route.path) === host.currentPath);
    return matchingRoute ? matchingRoute.component : html ``;
};
export function Router(options) {
    return {
        mode: options.mode || 'history',
        routes: options.routes || [],
        currentPath: getCurrentPath(window),
        render: render(template, { shadowRoot: options.shadowRoot }),
    };
}
export function push(host, path) {
    const hashed = hash(path);
    const unhashed = unhash(path);
    const currentPath = getCurrentPath(window);
    if (currentPath === hashed || currentPath === unhashed)
        return;
    const { state } = window.history;
    const { pathname } = window.location;
    const historyMode = host.mode === 'history';
    host.currentPath = historyMode ? unhashed : hashed;
    window.history.pushState(state, pathname, host.currentPath);
    window.addEventListener('popstate', () => (host.currentPath = getCurrentPath(window)));
}
