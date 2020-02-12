export function getCurrentPath(): string {
  if (window && 'location' in window) {
    const { href, origin } = window.location
    return href.replace(origin, '')
  }
}

export function hash(path: string): string {
  return `/#${path}`
}
