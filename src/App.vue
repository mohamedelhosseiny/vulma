<template>
  <div id="app" 
  v-bind:class="{ ltr: $store.getters.locale == 'en', rtl: $store.getters.locale == 'ar' }">
    <base-layout></base-layout>
  </div>
</template>

<script>
import baseLayout from '@/layout/base';

export default {
  name: 'app',
  components: {
    baseLayout,
  },
};
</script>

<style lang="scss">
  @import './assets/scss/vars';
  @import './assets/scss/plugins';
  @import './assets/scss/helpers';
  @import './assets/scss/reset';
  @import '~bulma';
  .ltr{
    direction: ltr;
  }
  .rtl{
    direction: rtl;
    font-family: 'DroidArabicKufiRegular', serif;
    .navbar-end {
      margin-left:unset;
      margin-right:auto;
    }
    .has-text-right{
      text-align:left !important;
    }
  }
</style>