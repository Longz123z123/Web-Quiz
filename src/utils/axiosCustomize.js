import axios from "axios";

//Thư viện Axios trong React được sử dụng để thực hiện các yêu cầu HTTP (HyperText Transfer Protocol) đến các API (Application Programming Interface). 
// Nói cách khác, nó giúp bạn giao tiếp với các server khác để lấy hoặc gửi dữ liệu.

const instance = axios.create({
    baseURL: 'http://localhost:8081/',
});
// Add a request interceptor
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // console.log("Check interceptors res>>", response)
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response && response.data ? response.data : response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // console.log(">>>run erro", error.response);
    return error & error.response && error.response.data
        ? error.response.data : Promise.reject(error);
});
export default instance;