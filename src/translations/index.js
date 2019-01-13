import Vue from 'vue';
import VueI18n from 'vue-i18n';
import store from '../store';
import messages from './messages';

Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: store.getters.locale, // set locale
  messages, // set locale messages
});

export default i18n;
