<template>
    <!-- Navbar -->
    <nav class="main-header navbar navbar-expand navbar-light navbar-white" v-if="login">
        <div class="container">
            <a href="#" class="navbar-brand">
                <img src="img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
                <span class="brand-text font-weight-light">{{ title }}</span>
            </a>

            <button class="navbar-toggler order-1" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse order-1" id="navbarCollapse">
                <!-- Right navbar links -->
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">登录</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>    
    <nav class="main-header navbar navbar-expand navbar-light navbar-white" v-else>
        <!-- Left navbar links -->
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" data-widget="pushmenu" href="#">
                    <font-awesome-icon :icon="['fas', 'bars']" />
                </a>
            </li>
            <li class="nav-item d-none d-sm-inline-block">
                <router-link :to="{ name: 'Home' }" class="nav-link">使用说明</router-link>
            </li>
            <li class="nav-item d-none d-sm-inline-block">
                <router-link to="#" class="nav-link">联系我们</router-link>
            </li>
        </ul>

        <!-- Right navbar links -->
        <ul class="navbar-nav ml-auto">
            <li class="nav-item d-done d-sm-inline-block">
                <router-link to="#" class="nav-link">
                    <font-awesome-icon :icon="['fas', 'sign-out-alt']" />
                    退出
                </router-link>
            </li>
        </ul>
    </nav>
    <!-- /.navbar -->

</template>

<script>
export default {
    name: 'Header',

    props: [ 'login' ],

    data: function() {
        return {
            title: process.env.MIX_APP_NAME
        }
    }
}
</script>
