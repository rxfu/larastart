<template>
<div>Dashbaord<br>{{ name }}</div>
</template>

<script>
export default {
    name: 'Dashboard',

    data: () => ({
        name: ''
    }),

    mounted() {
        axios.get('/v1/api/users')
        .then(response => {
            this.name = response.data.name;
        })
    }
}
</script>
