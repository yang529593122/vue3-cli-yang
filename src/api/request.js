/**
 * Time: 2021/6/23.
 * Author: Yang PengFei
 */
import axios from "axios";
axios.defaults.timeout = 120000; // 两分钟
axios.defaults.headers.common["Content-Type"] = "application/json";

// 取消请求操作
const allPendingRequestsRecord = [];
const pending = {};
const removeAllPendingRequestsRecord = () => {
  allPendingRequestsRecord &&
    allPendingRequestsRecord.forEach((func) => {
      // 取消请求（调用函数就是取消该请求）
      func("路由跳转了取消所有请求");
    });
  // 移除所有记录
  allPendingRequestsRecord.splice(0);
};

// 取消同一个重复的ajax请求
const removePending = (key, isRequest = false) => {
  if (pending[key] && isRequest) {
    pending[key]("取消重复请求");
  }
  delete pending[key];
};

// 取消所有请求的函数
export const getConfirmation = (callback = () => {}) => {
  removeAllPendingRequestsRecord();
  callback();
};

// 请求拦截器
axios.interceptors.request.use(
  (config) => {
    // 在请求发送前执行一下取消操作，防止连续点击重复发送请求(例如连续点击2次按钮)
    let reqData = "";
    // 处理如url相同请求参数不同时上一个请求被屏蔽的情况
    if (config.method === "get") {
      reqData = config.url + config.method + JSON.stringify(config.params);
    } else {
      reqData = config.url + config.method + JSON.stringify(config.data);
    }
    // 如果用户连续点击某个按钮会发起多个相同的请求，可以在这里进行拦截请求并取消上一个重复的请求
    removePending(reqData, true);
    // 设置请求的 cancelToken（设置后就能中途控制取消了）
    config.cancelToken = new axios.CancelToken((c) => {
      pending[reqData] = c;
      allPendingRequestsRecord.push(c);
    });

    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// 响应拦截器
axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (err) => {
    // 终结由于取消重复请求而引发的报错提示
    if (axios.isCancel(err)) {
      return new Promise(() => {});
    }
    return Promise.reject(err);
  }
);

const getRequest = (url, params = {}, headers = {}) => {
  return new Promise((resolve, reject) => {
    axios({
      url: url,
      method: "GET",
      params,
      headers,
    })
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  }).catch((error) => {
    console.log(error);
  });
};
const postRequest = (url, params = {}, headers = {}) => {
  return new Promise((resolve, reject) => {
    axios({
      url: url,
      method: "POST",
      params,
      headers,
    })
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  }).catch((error) => {
    console.log(error);
  });
};
const fileRequest = (url, data = {}) => {
  axios.defaults.headers.common["Content-Type"] = "multipart/form-data";
  return new Promise((resolve, reject) => {
    const options = {
      method: "POST",
      headers: { "content-type": "multipart/form-data" },
      data,
      url,
    };
    axios(options).then(
      (response) => {
        if (response) {
          resolve(response.data);
        } else {
          reject(response);
        }
      },
      (err) => {
        reject(err);
      }
    );
  }).catch((error) => {
    console.log(error);
  });
};

export { getRequest, postRequest, fileRequest };
