/**
 * Time: 2021/10/18.
 * Author: Yang PengFei
 */

const state = {
  axiosPromiseCancel: [],
};
const mutations = {
  clearAxiosPromiseCancel(state) {
    state.axiosPromiseCancel = [];
  },
};

export default {
  namespace: true,
  state,
  mutations,
};
