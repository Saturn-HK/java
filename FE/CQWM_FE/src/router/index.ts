//通过vue-router插件实现模板路由配置
import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';
import {constantRoute} from './routes';
// import login from "@/views/login.vue";
// import layout from "@/views/layout.vue";
// import fall from "@/views/404.vue";
//创建路由器

let router = createRouter({
    //路由模式hash
    history: createWebHistory(),
    routes: <RouteRecordRaw[]>constantRoute,
    //滚动行为
    scrollBehavior() {
        return {
            left: 0,
            top: 0
        }
    }
});
export default router;