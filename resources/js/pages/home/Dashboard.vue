<template>
<div>Dashbaord<br>{{ name }}</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'Dashboard',

    data: () => ({
        title: '仪表盘',
        name: ''
    }),

    mounted() {
        this.setTitle({ title: this.title });
        // axios.get('/v1/api/users')
        // .then(response => {
        //     this.name = response.data.name;
        // })
    },

    methods: {
        ...mapActions([
            'setTitle',
        ])
    }
}
</script>
