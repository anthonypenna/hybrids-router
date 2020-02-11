import { define, html } from 'hybrids'
import { Router, push } from './src'

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
