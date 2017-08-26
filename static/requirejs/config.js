/**
 * 前端模块配置
 * @author 向军 <2300071698@qq.com>
 */
if (!window.hdjs) {
    window.hdjs = {'base': '', 'uploader': '', 'filesLists': ''};
}
window.hdjs_path = window.hdjs.base ? window.hdjs.base : '/node_modules/hdjs';
require.config({
    baseUrl: hdjs_path,
    paths: {
        jquery: 'https://cdn.bootcss.com/jquery/3.2.1/jquery.min',
        util: hdjs_path + '/dist/hdjs',
        hdjs: hdjs_path + '/dist/hdjs',
        css: hdjs_path + '/dist/static/requirejs/css.min',
        domReady: hdjs_path + '/dist/static/requirejs/domReady',
    },
    shim: {
        'util': {
            deps: ['css!dist/app.css']
        },
        'hdjs': {
            deps: ['css!dist/app.css']
        },
        'jquery': {
            exports: '$',
        }
    },
    waitSeconds: 30
});











