<template>
    <!-- Alert -->
    <div id="alert" class="alert alert-dismissible" :class="alert.class">
        <button type="button" class="close" data-dismiss="alert" aria-hidden="true" @click="flushMessage(message.id)">&times;</button>
        <h5>
            <font-awesome-icon :icon="['fas', alert.icon]" class="icon" /> {{ alert.title }}！
        </h5>
        {{ message.content }}
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'Alert',

    props: [ 'message' ],

    computed: {
        alert: function() {
            var data = {};

            switch (this.message.type) {
                case 'error':
                    data = {
                        'class': 'alert-danger',
                        'icon': 'ban',
                        'title': '错误'
                    };
                    break;

                case 'info':
                    data = {
                        'class': 'alert-info',
                        'icon': 'info',
                        'title': '信息'
                    };
                    break;

                case 'warning':
                    data = {
                        'class': 'alert-warning',
                        'icon': 'warning',
                        'title': '警告'
                    };
                    break;

                case 'success':
                    data = {
                        'class': 'alert-success',
                        'icon': 'check',
                        'title': '成功'
                    };
                    break;

                default:
                    data = {
                        'class': 'alert-secondary',
                        'icon': 'fa-info',
                        'title': '其他'
                    }
            }

            return data;
        }
    },

    methods: {
        ...mapActions([
            'flushMessage'
        ])
    }
}
</script>
