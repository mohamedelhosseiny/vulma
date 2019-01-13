<template>
    <nav ref="navbar" class="navbar">
      <div class="container">
        
        <div class="navbar-brand">
          <router-link class="navbar-item" :to="'/'">
<!--             <figure class="image">
              <img class="is-30px" src="/fstatic/logo.png" alt="">
            </figure>
 -->            <p class="no-margin-bottom title is-4 is-white">{{ $t('navbar.title') }}</p>
          </router-link>
          

          <div class="navbar-burger burger" data-target="navMenubd-example" @click="menuIsActive = !menuIsActive">
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navMenubd-example" class="navbar-menu" :class="{'is-active': menuIsActive}">
          <div class="navbar-end">
            <ul>
              <li :class="{current: $route.path === '/'}"> {{ $t('navbar.home') }}</li>
              <li :class="{current: $route.path === '/about'}">About Us</li>
              <!-- <li :class="{current: $route.path === '/about'}">Capabilities</li> -->
              <li :class="{current: $route.path === '/about'}">Solutions</li>
              <li :class="{current: $route.path === '/about'}">Careers</li>
              <li :class="{current: $route.path === '/about'}">Contact Us</li>
              <!-- <li 
              @click="changeLanguage">
              {{ $t('utils.locale') }}
              </li> -->
            </ul>
          </div>
        </div>
      </div>
    </nav>
</template>
<script>
  // import {bus} from '@/main'

  export default{
    data() {
      return {
        menuIsActive: false,
      };
    },
    watch: {
      $route: function route() {
        this.menuIsActive = false;
      },
      '$mq.resize': function d(argument) {
        if (argument > 1022) {
          this.menuIsActive = false;
        }
      },
    },
    methods: {
      changeLanguage() {
        let locale = 'en';
        if (this.$store.getters.locale === 'en') {
          locale = 'ar';
        }
        return this.$store.commit('setLocale', locale);
      },
    },
  };
</script>
<style lang="scss" scoped>
  @import '../assets/scss/vars';
  nav {
    padding: .6rem;
    background: #636363;
  }
  .red {
    color: red;
  }
  .is-30px {
    width: 30px;
    margin-right: 5px;
  }
  .current {
    color: red;
  }
  .is-active {
    ul {
      flex-direction: column;
      align-items: right;
      li {
        padding: 0.6em 1.8em 0.4em 1.8em;
        border-bottom: 1px solid gray;
        width: 100%;
      }
      li:last-child {
        border-bottom: none;
      }
    }
  }
  .navbar-brand {
    align-items: center;
    .navbar-burger {
      color: white;
    }
  }
  li {
    font-weight: 400;
    font-size: 1rem;
    color: white;
    padding: 0.8em;
    cursor: pointer;
  }
  ul {
    display: flex;
    align-items: center;
  }
  .navbar-menu {
    background: #636363 !important;
  }
  .navbar-item {
    &:hover {
      color: inherit;
      background: inherit;
    }
    img {
      max-height: 200px;
    }
  }

</style>