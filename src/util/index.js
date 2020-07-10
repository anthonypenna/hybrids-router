export function getCurrentPath(window) {
    const { href, origin } = window.location;
    return href.replace(origin, '');
}
export function hash(path) {
    const hasSlash = path.slice(0, 1) === '/';
    const hasHash = path.slice(1, 2) === '#';
    return hasHash ? path : hasSlash ? `/#${path.slice(1)}` : `/#${path}`;
}
export function unhash(path) {
    const noHash = path.slice(0, 1) !== '#' && path.slice(1, 2) !== '#';
    const noSlash = path.slice(0, 1) !== '/';
    if (noSlash && noHash)
        return `/${path}`;
    else if (noSlash && !noHash)
        return `/${path.replace('#', '')}`;
    else if (!noSlash && !noHash)
        return path.replace('/#', '/');
    else
        return path;
}
