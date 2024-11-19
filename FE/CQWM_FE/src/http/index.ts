//进行axios二次封装:使用请求与响应拦截器
import axios from "axios";
//第一步:利用axios对象的create方法,去创建axios实例(其他的配置:基础路径、超时的时间)
let axios_instance = axios.create({
     //基础路径
     baseURL: import.meta.env.VITE_APP_BASE_API,//基础路径上会携带/api
     timeout: 5000,//超时的时间的设置
     headers: {
          "Content-Type":'x-www-form-urlencoded'}
});
axios_instance.interceptors.request.use(function(config) {
     // 在发送请求之前做些什么
     return config;
}, function(error) {
     // 对请求错误做些什么
     return Promise.reject(error);
});

// 添加响应拦截器
axios_instance.interceptors.response.use(function(response) {
     // 对响应数据做点什么
     return response.data
}, function(error) {
     // 对响应错误做点什么
     return Promise.reject(error);
});

export default axios_instance