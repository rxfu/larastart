<template>
    <transition-group name="breadcrumb">
        <ol class="breadcrumb float-sm-right" v-for="(item, index) in breadList" :key="item.path">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item" :class="{ active: item.isActive }">Inline Charts</li>
        </ol>
    </transition-group>
</template>

<script>
export default {
    data() {
        return {
            breadList: null
        }
    },

    watch: {
        $route() {
            this.getBreadcrumb();
        }
    },

    methods: {
        getBreadcrumb() {
            let matched = this.$route.matched.filter(item => item.meta && item.meta.title);
            const first = matched[0] && matched[0].name;

            if (!(first.toLocaleLowerCase() === 'Home'.toLocaleLowerCase())) {
                matched = [{
                    path: '/',
                    meta: {
                        title: 'Home'
                    }
                }].concat(matched);
            }
            this.breadList = matched;
        }
    }
}
</script>
