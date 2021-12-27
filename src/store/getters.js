/**
 * Time: 2021/10/18.
 * Author: Yang PengFei
 */
const getters = {
  menus: (state) => state.home.menus,
  name: (state) => state.home.name,
  count: (state) => state.home.count,
  axiosConfig: (state) => state.axiosConfig.axiosPromiseCancel,
};

export default getters;
