<template>
    <validation-observer v-slot="{ invalid } ">
        <form method="post" @submit.prevent="onSubmit" autocomplete="off">
            <validation-provider rules="required" v-slot="{ errors }" slim>
                <div class="input-group mb-3">
                    <input type="text" id="username" name="username" v-model="username" class="form-control" :class="{ 'is-invalid': errors[0] }" placeholder="用户名" required autofocus>
                    <div class="input-group-append">
                        <span class="input-group-text">
                            <font-awesome-icon :icon="['fas', 'user']" />
                        </span>
                    </div>
                    <invalid :message="errors[0]"></invalid>
                </div>
            </validation-provider>
            <validation-provider rules="required" v-slot="{ errors }" slim>
                <div class="input-group mb-3">
                    <input type="password" id="password" name="password" v-model="password" class="form-control" :class="{ 'is-invalid': errors[0] }" placeholder="密码" required>
                    <div class="input-group-append">
                        <span class="input-group-text">
                            <font-awesome-icon :icon="['fas', 'lock']" />
                        </span>
                    </div>
                    <invalid :message="errors[0]"></invalid>
                </div>
            </validation-provider>
            <div class="row">
                <div class="col-8">
                    <div class="checkbox icheck">
                        <label>
                            <input type="checkbox" value="1" name="remember_me"> 记住我
                        </label>
                    </div>
                </div>

                <div class="col-4">
                    <button type="submit" class="btn btn-primary btn-block" :disabled="invalid">登录</button>
                </div>
            </div>
        </form>
    </validation-observer>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'Login',

    data: () => ({
        title: '登录',
        username: null,
        password: null,
        errors: []
    }),

    mounted() {
        this.setTitle({ title: this.title });
    },

    methods: {
        ...mapActions([
            'setTitle',
            'promptMessage'
        ]),

        onSubmit() {
            axios.post('/login', {
                username: this.username,
                password: this.password,
            }).then(response => {
                console.log('successful');
                console.log(response);
                this.promptMessage({
                    prompt: {
                        type: 'success',
                        message: '登录成功，欢迎使用本系统'
                    }
                });
            }).catch(error => {
                console.log(error);
                if (error.response.status == 422) {
                    this.errors = error.response.data.errors;
                }
            })
        }
    }
}
</script>
