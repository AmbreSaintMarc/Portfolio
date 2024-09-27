import './assets/main.css'
import ProjectMain from "./components/ProjectMain.vue"
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Page404 from './Page404.vue'


const routes = [
    {
        path: '/',
        name: 'ProjectMain',
        component: ProjectMain,
      },
      {
        path: '/:pathMatch(.*)*', 
        name: 'Page404',
        component: Page404,
      },
  ]

const router = createRouter({
    history: createWebHistory(),
    routes,
  })


createApp(App)
    .use(router)
    .mount('#app')
    


