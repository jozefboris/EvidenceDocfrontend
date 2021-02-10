import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main';
import Login from "../components/Login";
import Registration from "../components/Registration";
import Menu from "../components/Menu";

Vue.use(Router);
if (sessionStorage.getItem("login") == undefined){
    sessionStorage.setItem("login",  "");

}

export default new Router({
    routes: [
        {
            path: '/Main',
            name: 'Main',
            component: Main
        },

        {
            path: '/',
            name: 'Login',
            component: Login
        },


        {
            path: '/Registration',
            name: 'Registration',
            component: Registration
        },
        {
            path: '/Menu',
            name: 'Menu',
            component: Menu
        }
    ]
});
