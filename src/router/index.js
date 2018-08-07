import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Yona from '../views/Yona.vue'
import Beer from '../views/Beer.vue'
import Bachelor from '../views/Bachelor.vue'
import Sport from '../views/Sport.vue'
import Crutch from '../views/Crutch.vue'
import Vef from '../views/Vef.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/yona',
      name: 'Yona',
      component: Yona
    },
    {
      path: '/beer',
      name: 'Beer',
      component: Beer
    },
    {
      path: '/bachelor',
      name: 'Bachelor',
      component: Bachelor
    },
    {
      path: '/sport',
      name: 'Sport',
      component: Sport
    },
    {
      path: '/crutch',
      name: 'Crutch',
      component: Crutch
    },
    {
      path: '/vef',
      name: 'Vef',
      component: Vef
    }
  ]
})
