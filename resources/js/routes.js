export default [{
    path: '/',
    name: 'Home',
    component: resolve => require(['./pages/Layout.vue'], resolve),
    meta: {
        bodyClass: 'sidebar-mini',
        isAuthenticated: false
    },
    children: [{
        path: '/dashboard',
        name: 'Dashboard',
        component: resolve => require(['./pages/home/Dashboard.vue'], resolve),
        meta: {
            title: '首页',
            isAuthenticated: false
        }
    }]
}, {
    path: '/login',
    name: 'Login',
    component: resolve => require(['./pages/auth/Login.vue'], resolve),
    meta: {
        title: '登录',
        bodyClass: 'layout-top-nav'
    }
}, {
    path: '/404',
    name: '404',
    component: resolve => require(['./pages/error/404.vue'], resolve),
    meta: {
        title: '页面未找到',
        bodyClass: 'layout-top-nav',
        isAuthenticated: true
    }
}, {
    path: '*',
    redirect: '/404'
}];
