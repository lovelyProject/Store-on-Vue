import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    products: [],
  },
  getters: {
    GET_PRODUCTS(state) {
      return state.products;
    },
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
  },
  actions: {
    GET_PRODUCTS_FROM_API({ commit }) {
      return axios
        .get("http://localhost:3000/products")
        .then((response) => {
          commit("SET_PRODUCTS", response.data);
        })
        .catch((e) => {
          console.log("Can not get products from API", e);
        });
    },
  },
  modules: {},
});
