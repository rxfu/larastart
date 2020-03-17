import VueBodyClass from 'vue-body-class';
import routes from './routes';
import store from './store';
import VueRouter from 'vue-router';

const vueBodyClass = new VueBodyClass(routes);

const router = new VueRouter({
    mode: 'history',
    base: process.env.MIX_BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    vueBodyClass.guard(to, next);

    if (to.name !== 'Login' && to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.isLoggedIn) {
            next();
        } else {
            next({
                name: 'Login',
                query: {
                    redirect: to.fullPath
                }
            });
        }
    } else {
        next();
    }
});

export default router;
