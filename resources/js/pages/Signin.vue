<template>
    <div class="wrapper">
        <!-- Navigation -->
        <navigation></navigation>

        <div class="content-wrapper">
            <div class="content">
                <div class="login-page">
                    <!-- Login box -->
                    <div class="login-box">
                        <!-- Alert -->
                        <alert></alert>

                        <!-- Login card -->
                        <div class="card">
                            <div class="card-body login-card-body">
                                <p class="login-box-msg">- 登录 -</p>

                                <form action="#" method="post">
                                    <div class="input-group mb-3">
                                        <input type="text" id="username" name="username" v-model="username" class="form-control" :class="{ 'is-invalid': errors.username }" placeholder="用户名" required autofocus>
                                        <div class="input-group-append">
                                            <span class="input-group-text">
                                                <font-awesome-icon :icon="['fas', 'user']" />
                                            </span>
                                        </div>
                                        <validation :error="error.username" v-if="error.username"></validation>
                                    </div>
                                    <div class="input-group mb-3">
                                        <input type="password" id="password" name="password" v-model="password" class="form-control" :class="{ 'is-invalid': errors.password }" placeholder="密码" required>
                                        <div class="input-group-append">
                                            <span class="input-group-text">
                                                <font-awesome-icon :icon="['fas', 'lock']" />
                                            </span>
                                        </div>
                                        <validation :error="error.password" v-if="error.password"></validation>
                                    </div>
                                    <div class="row">
                                        <div class="col-8">
                                            <div class="checkbox icheck">
                                                <label>
                                                    <input type="checkbox" value="1" name="remember_me"> 记住我
                                                </label>
                                            </div>
                                        </div>

                                        <div class="col-4">
                                            <button type="submit" class="btn btn-primary btn-block">登录</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Main Footer -->
        <foot></foot>
    </div>
</template>

<script>
    export default {
        name: 'Signin',

        data: function() {
            return {
                title: process.env.MIX_APP_SLUG,
                errors: []
            }
        },

        methods: {
            onSubmit() {
                axios.post('/login', {
                    username: this.username,
                    password: this.password,
                }).then(reponse => {
                    console.log('successful');
                }).catch(error => {
                    if (error.reponse.status == 422) {
                        this.errors = error.reponse.data.errors;
                    }
                })
            }
        }
    }
</script>

<style scoped>
.login-page {
    height: calc(100vh - calc(3.5rem + 1px) - calc(3.5rem + 1px)) !important;
}
</style>
