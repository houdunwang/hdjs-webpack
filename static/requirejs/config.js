/**
 * 前端模块配置
 * @author 向军 <2300071698@qq.com>
 */
require.config({
    baseUrl: window.hdjs.base,
    paths: {
        'jquery':'https://cdn.bootcss.com/jquery/3.2.1/jquery.min',
        'util':'util',
        'css': 'static/requirejs/css.min',
    },
    shim: {
        'util': {
            deps: ['css!app.css']
        },
        'jquery': {
            exports: '$',
        }
    },
    waitSeconds: 30
});











