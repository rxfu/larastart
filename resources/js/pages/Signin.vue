<template>
    <!-- Login box -->
    <div class="login-box">
        <!-- Login logo -->
        <div class="login-logo">
            {{ title }}
        </div>

        <!-- Login card -->
        <div class="card">
            <div class="card-body login-card-body">
                <p class="login-box-msg">登录</p>

                <alert></alert>
                
                <form action="#" method="post">
                    <div class="input-group mb-3">
                        <input type="text" id="username" name="username" class="form-control" placeholder="用户名" required autofocus>
                        <div class="input-group-append">
                            <span class="input-group-text">
                                <font-awesome-icon :icon="['fas', 'user']" />
                            </span>
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <input type="password" id="password" name="password" class="form-control" placeholder="密码" required>
                        <div class="input-group-append">
                            <span class="input-group-text">
                                <font-awesome-icon :icon="['fas', 'lock']" />
                            </span>
                        </div>
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
</template>

<script>
    export default {
        name: 'Signin',

        mounted() {
            console.log('Signin page mounted.')
        },

        data: function() {
            return {
                title: process.env.MIX_APP_SLUG
            }
        }
    }
</script>
