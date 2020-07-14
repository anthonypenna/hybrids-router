# Hybrids Router

A simple, declarative router built with Hybrids. Inspired by `vue-router`.

Please note this package is still in early development.

## Installation
---
```bash
$ npm add hybrids-router
```

## API
---

The package exposes two functions: `createRouter` and `push`.

### createRouter

A function that accepts a Hybrids namespace parameter and returns a Router constructor function. The returned function accepts an `options` parameter that will be used to determine the currently active path, shadow root usage and router mode.

### push

Push allows you to programmatically change route.
It accepts two parameters: `host` and `path`.
`host` is the instance of the Hybrid Router component, while path is a string
that indicates the route you wish to navigate to.

## Usage
---

Below is a simple example of how we could setup the Hybrids Router in our application:

```jsx
import * as hybrids from 'hybrids'
import { html, define } from 'hybrids'
import { createRouter, push } from 'hybrids-router'

const options = {
  mode: 'history',
  shadowRoot: false,
  routes: [
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
}

const Router = createRouter(hybrids)(options)

define('hybrids-router', Router)
```

And in our template:

```html
<hybrids-router></hybrids-router>
```

## Development

**Run tests**
```bash
$ npm run test
```

**Run tests in watch mode**
```bash
$ npm run test:watch
```

**Build bundle**

```bash
$ npm run build
```

## Contributing
---

If you would like to contribute to the codebase or docs, please feel free to open a PR.
