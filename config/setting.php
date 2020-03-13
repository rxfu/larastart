<?php

return [
    'base' => env('MIX_BASE_URL', '/'),
    'name' => env('MIX_APP_NAME', 'Laradmin'),
    'slug' => env('MIX_APP_SLUG', 'LaraStart'),
    'keywords' => 'Laravel, Bootstrap, Vue.js, AdminLTE, Admin template',
    'description' => 'An admin boilerplate developed with Bootstrap, Vue and AdminLTE base on Laravel',
    'author' => 'Fu Rongxin',
    'powerby' => 'Fu Rongxin',
    'copyright' => 'LaraStart Company',
    'password' => '123456',

    // 状态代码,
    'code' => [
        200001 => '登录成功',
        200002 => '退出成功',
        401001 => '用户名或密码错误',
        401002 => '用户未认证',
    ]
];
