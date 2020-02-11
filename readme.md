# Hybrids Router

A simple, declarative router built with Hybrids. Inspired by `vue-router`.

Please note this package is still in early development.

## Installation

```bash
$ npm add hybrids-router
```

## Setup

The package exposes two functions: `Router` and `push`.

### Router

Router is a function that returns a Hybrid HTMLElement.
It accepts a `routes` parameter that will be used by the component
to determine the currently active path.

### Push

Push allows you to programmatically change route.
It accepts two parameters: `host` and `path`.
`host` is the instance of the Hybrid Router component, while path is a string
that indicates the route you wish to navigate to.

## Usage

**Start local development server**

```bash
$ npm run dev
```

**Build bundle**

```bash
$ npm run build
```

Below is a simple example of how we could setup the Hybrids Router in our application:

```jsx
import { html, define } from 'hybrids'
import { Router, push } from 'hybrids-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: html`
      <section>
        <h1>Home page</h1>
        <button onclick="${host => push(host, '/about')}">About</button>
      </section>
    `
  },
  {
    path: '/about',
    name: 'about',
    component: html`
      <section>
        <h1>About page</h1>
        <button onclick="${host => push(host, '/')}">Home</button>
      </section>
    `
  }
]

define('hybrid-router', Router(routes))
```

And in our template:

```html
<hybrid-router></hybrid-router>
```

## Contributing

If you would like to contribute to the codebase or docs, please feel free to open a PR.
