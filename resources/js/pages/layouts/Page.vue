<template>
    <!-- Site wrapper -->
    <div class="wrapper">
        <navigation :login="true"></navigation>

        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            <!-- Main content -->
            <div class="content">
                <div class="login-page">
                    <!-- Login box -->
                    <div class="login-box">
                        <!-- Alert -->
                        <alert v-if="prompt.message" :prompt="prompt"></alert>

                        <!-- Login card -->
                        <div class="card">
                            <div class="card-body login-card-body">
                                <p class="login-box-msg">{{ title }}</p>

                                <router-view @title="setTitle"></router-view>
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
export default {
    name: 'App',

    data: () => ({
        prompt: {
            type: null,
            message: null
        }
    }),

    computed: {
        title: function() {
            return this.$store.getters.title;
        }
    }
}
</script>

<style scoped>
.login-page {
    height: calc(100vh - calc(3.5rem + 1px) - calc(3.5rem + 1px)) !important;
}
</style>
