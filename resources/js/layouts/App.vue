<template>
    <div>
        test App
        <router-link to="/signin">Go to Sign in</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'App',

    mounted() {
        console.log('App mounted.')
    }
}
</script>