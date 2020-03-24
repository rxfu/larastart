<template>
    <!-- Site wrapper -->
    <div class="wrapper">
        <loading v-if="loading"></loading>
        
        <navigation :login="true"></navigation>

        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            <!-- Main content -->
            <div class="content">
                <div class="login-page">
                    <!-- Login box -->
                    <div class="login-box">
                        
                        <alert></alert>

                        <!-- Login card -->
                        <div class="card">
                            <div class="card-body login-card-body">
                                <p class="login-box-msg">{{ title }}</p>
                                <transition>
                                    <router-view></router-view>
                                </transition>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <foot></foot>
    </div>
    <!-- ./wrapper -->
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'App',

    computed: {
        ...mapGetters(['loading', 'title'])
    }
}
</script>

<style scoped>
.login-page {
    height: calc(100vh - calc(3.5rem + 1px) - calc(3.5rem + 1px)) !important;
}
</style>
