<template>
    <div>
        Login page
        <router-link to="/">Go to Home</router-link>
        </div>
</template>

<script>
    export default {
        name: 'Signin',

        mounted() {
            console.log('Signin page mounted.')
        },

        data: function() {
            return {
                signin: true
            }
        }
    }
</script>
