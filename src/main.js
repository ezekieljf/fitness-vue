import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'notyf/notyf.min.css';

import './style.css';


import { createApp } from 'vue';
import App from './App.vue';

import { createPinia } from 'pinia';


import { createRouter, createWebHistory } from 'vue-router';

import LoginPage from './pages/LoginPage.vue';
import RegisterPage from './pages/RegisterPage.vue'
import WorkoutsPage from './pages/WorkoutsPage.vue';
import AddWorkoutPage from './pages/AddWorkoutPage.vue';

import HomePage from './pages/HomePage.vue';
import LogoutPage from './pages/LogoutPage.vue';


const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/',
            name: 'Home',
            component: HomePage
        },
        {
            path: '/workouts',
            name: 'Workouts',
            component: WorkoutsPage
        },
        {
            path: '/register',
            name: 'Register',
            component: RegisterPage
        },
        {
            path: '/login',
            name: 'Login',
            component: LoginPage
        },
        {
            path: '/logout',
            name: 'Logout',
            component: LogoutPage
        },
        {
            path: '/addWorkout',
            name: 'AddWorkout',
            component: AddWorkoutPage
        }
    ]
})

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');

// createApp(App).mount('#app')