<template>
    <!-- Site wrapper -->
    <div class="wrapper">
        <loading v-if="loading"></loading>

        <navigation></navigation>

        <sidebar></sidebar>

        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            <alert></alert>
            
            <!-- Content Header (Page header) -->
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1>{{ title }}</h1>
                        </div>
                        <div class="col-sm-6">
                            <!-- Breadcrumb -->
                            <breadcrumb></breadcrumb>
                        </div>
                    </div>
                </div><!-- /.container-fluid -->
            </section>

            <!-- Main content -->
            <section class="content">
                <div class="content-fluid">
                    <transition>
                        <router-view></router-view>
                    </transition>
                </div>
            </section>
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
        ...mapGetters(['loading', 'title', 'messages'])
    },

    methods: {
        goBack() {
            window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
        }
    }
}
</script>