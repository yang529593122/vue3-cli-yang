/*
 * @Description:
 * @Author: yangpengfei
 * @Email: 529593122@qq.com
 * @Date: 2021-10-15
 */

import { createStore } from "vuex";
import getters from "./getters";

const modulesFiles = require.context("./modules", true, /\.js$/);
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, "$1");
  const value = modulesFiles(modulePath);
  modules[moduleName] = value.default;
  return modules;
}, {});

const store = createStore({
  getters,
  modules,
});

export default store;
