<template>
    <footer class="main-footer">
        <!-- To the right -->
        <div class="float-right d-none d-sm-inline">
            欢迎使用{{ appSlug }}
        </div>
        <!-- Default to the left -->
        <strong>Copyright &copy; {{ year }} <a href="https://adminlte.io">{{ appName }}</a>.</strong> 保留所有权利.
    </footer>
</template>

<script>
export default {
    name: 'Foot',

    data: function() {
        return {
            year: new Date().getFullYear(),
            appName: process.env.MIX_APP_NAME,
            appSlug: process.env.MIX_APP_SLUG
        }
    }
}
</script>
