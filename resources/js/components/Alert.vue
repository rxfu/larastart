<template>
    <!-- Alert -->
    <div class="alert alert-dismissible" :class="tip.class">
        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
        <h5>
            <font-awesome-icon :icon="['fas', tip.icon]" class="icon" /> {{ tip.title }}！
        </h5>
        {{ state.message }}
    </div>
</template>

<script>
export default {
    name: 'Alert',

    props: [ 'state' ],

    computed: {
        tip: function() {
            var data = {};

            switch (this.state.type) {
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
    }
}
</script>
