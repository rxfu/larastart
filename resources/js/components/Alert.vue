<template>
    <div v-if="messages">
        <div class="alert alert-dismissible" :class="stateClass" v-for="(value, key) in errors" :key="key">
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
            <h5>
                <i class="icon fas" :class="stateIcon"></i> {{ stateTitle }}！
            </h5>
            {{ value }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'Alert',

    computed: {
        stateClass: function() {
            return {
                'alert-danger': this.error,
                'alert-info': this.info,
                'alert-warning': this.warning,
                'alert-success': this.success
            }
        },

        stateIcon: function() {
            return {
                'fa-ban': this.error,
                'fa-info': this.info,
                'fa-warning': this.warning,
                'fa-success': this.success
            }
        },

        stateTitle: function() {
            return {
                '错误': this.error,
                '信息': this.info,
                '警告': this.warning,
                '成功': this.success
            }
        }
    }
}
</script>
