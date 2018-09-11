<template>
  <div class="navbar-item has-dropdown is-hoverable">
    <a class="navbar-link">
      <span class="flag has-text-primary"> 
        <flag :iso="flag" />
      </span> 
      <span class="selected-name">{{locale}}</span>
      <div class="navbar-dropdown language">
        <div class="navbar-item" @click="changeLocale('en')">
          <span class="flag has-text-primary"> 
            <flag iso="gb" />
          </span> 
          <span class="name">English</span>
        </div>
        <div class="navbar-item" @click="changeLocale('ar')">
          <span class="flag has-text-primary"> 
            <flag iso="sa" />
          </span> 
          <span class="name">Arabic</span></div>
          </div>
        </a>
      </div>
</template>
<script>
  import { mapState , mapActions } from 'vuex';
  export default{
    computed: {
      ...mapState({
        locale: state => state.translation.locale,
      }),
      flag: function(){
        switch (this.locale) {
          case 'en':
            return 'gb';
            break;
          case 'ar':
            return 'sa';
            break;
          case 'fr':
            return 'fr';
            break;
          default:
            // statements_def
            break;
        }
      }
    },
    methods:{
      ...mapActions(['setLocale']),
      changeLocale: function(locale){
        this.setLocale(locale)
      },
    }
  };
</script>
<style lang="scss" scoped>
  .selected-name{
    text-transform: uppercase;
  }
  .flag{
    margin:0 5px;
    .flag-icon{
      border-radius: 2px;
    }
  }
  .language{
    .flag-icon{
      width:1.3rem;
      line-height: 1.3rem;
    }
  }
</style>
