import login from '@/views/login/index.vue'
import forget from '@/views/login/forget_password.vue'
import layout from '@/views/layout.vue'
import fall from '@/views/404.vue'
import menu from '@/views/menu/index.vue'
import home from '@/views/home/index.vue'
export const constantRoute = [

    {
        //登录
        path: '/login',
        component: login,
        name: 'login',

    },
    {
        path: '/forget_word',
        component:forget,
        name: 'forget_word',
    }
    ,

    {
        //登录成功以后展示数据的路由
        path: '/',
        component: layout,
        name: 'layout'
    }
    ,



    {
        //404
        path: '/404',
        component:fall,
        name: '404',

    },
    {
        name: 'menu',
        path: '/menu',
        component: menu,
        children: [{
            name: 'home',
            path: '/home',
            component: () => import('@/views/home/index.vue')
        },
            {
                name: 'set',
                path: '/set',
                component: () => import('@/views/set/index.vue')
            },
            {
                name: 'overview',
                path: '/overview',
                component: () => import('@/views/overview/index.vue')
            },





            {
                name: 'message_list',
                path: '/message_list',
                component: () => import('@/views/message/message_list/index.vue')
            },
            {
                name: 'recycle',
                path: '/recycle',
                component: () => import('@/views/message/recycle/index.vue')
            },


            {
                name: 'login_log',
                path: '/login_log',
                component: () => import('@/views/login_log/index.vue')
            },
        ]
    },
    {
        // 任意路由
        path: '/:pathMatch(.*)*',
        redirect:{ name:'404' },
        name: 'any',

    }



]

//异步路由
// export const asnycRoute = [
//     {
//         path: '/acl',
//         component: () => import('@/layout/index.vue'),
//         name: 'Acl',
//         meta: {
//             title: '权限管理',
//             icon: 'Lock'
//         },
//         redirect: '/acl/user',
//         children: [
//             {
//                 path: '/acl/user',
//                 component: () => import('@/views/acl/user/index.vue'),
//                 name: 'User',
//                 meta: {
//                     title: '用户管理',
//                     icon: 'User'
//                 }
//             },
//             {
//                 path: '/acl/role',
//                 component: () => import('@/views/acl/role/index.vue'),
//                 name: 'Role',
//                 meta: {
//                     title: '角色管理',
//                     icon: 'UserFilled'
//                 }
//             },
//             {
//                 path: '/acl/permission',
//                 component: () => import('@/views/acl/permission/index.vue'),
//                 name: 'Permission',
//                 meta: {
//                     title: '菜单管理',
//                     icon: 'Monitor'
//                 }
//             }
//         ]
//     }
//     ,
//     {
//         path: '/product',
//         component: () => import('@/layout/index.vue'),
//         name: 'Product',
//         meta: {
//             title: '商品管理',
//             icon: 'Goods',
//         },
//         redirect: '/product/trademark',
//         children: [
//             {
//                 path: '/product/trademark',
//                 component: () => import('@/views/product/trademark/index.vue'),
//                 name: "Trademark",
//                 meta: {
//                     title: '品牌管理',
//                     icon: 'ShoppingCartFull',
//                 }
//             },
//             {
//                 path: '/product/attr',
//                 component: () => import('@/views/product/attr/index.vue'),
//                 name: "Attr",
//                 meta: {
//                     title: '属性管理',
//                     icon: 'ChromeFilled',
//                 }
//             },
//
//
//         ]
//     }
// ]

// //任意路由
export const anyRoute = {
    //任意路由
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any',
    meta: {
        title: '任意路由',
        hidden: true,
        icon: 'DataLine'
    }
}