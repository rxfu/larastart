<template>
    <!-- Alert -->
    <section id="alert">
        <div class="alert alert-dismissible" :class="message.class" v-for="message in messages" :key="message.id">
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true" @click="deleteMessage(message.id)">&times;</button>
            <h5>
                <font-awesome-icon :icon="['fas', message.icon]" class="icon" /> {{ message.title }}！
            </h5>
            {{ message.content }}
        </div>
    </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'Alert',

    computed: {
        ...mapGetters([
            'messages'
        ])
    },

    mounted() {
        this.flushMessages();
    },

    methods: {
        ...mapActions([
            'deleteMessage',
            'flushMessages'
        ])
    }
}
</script>
