import Vuex from 'vuex';
import Vue from 'vue';
import Vapi from 'vuex-rest-api';
import { axiosInstance, baseURL } from '../../api/axios';

Vue.use(Vuex);

const entities = new Vapi({
  axios: axiosInstance,
  baseURL,
  state: {
    entities: [],
  },
})
  .get({
    action: 'listEntity',
    property: 'entities',
    path: '/path/',
    queryParams: true,
  })
    .getStore();
export default entities;
