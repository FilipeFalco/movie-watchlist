import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = new Router({
    mode: 'history',
    routes: [
        { 
            path: '/',
            redirect: '/home',
        },
        { 
            path: '/home',
            name: 'home',
            component: () => import('@/views/Home.vue'),
        },
        { 
            path: '/register',
            name: 'register',
            component: () => import('@/views/Register.vue'),
        },
    ],
});

export default routes;