<template>
    <!-- Site wrapper -->
    <div class="wrapper">
        <navigation></navigation>

        <sidebar></sidebar>

        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
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

            <!-- Alert -->
            <alert v-if="prompt.message" :prompt="prompt"></alert>

            <!-- Main content -->
            <section class="content">
                <div class="content-fluid">
                    <router-view></router-view>
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
        ...mapGetters(['title', 'prompt'])
    }
}
</script>