<template>
	<div>
    <nav ref="navbar" >
       <div class="wrapper">
         <ul class="">
          <router-link :to="'/'">
           <li :class="{active: $route.name === 'home'}"> {{ $t('navbar.home') }}</li>
	       </router-link>
          <router-link :to="'/sport'">
           <li :class="{active: $route.name === 'sport'}">{{ $t('navbar.sports') }}</li>
	       </router-link>
          <router-link :to="'/'">
           <li :class="{active: $route.name === 'about'}">{{ $t('navbar.about') }}</li>
	       </router-link>
          <router-link :to="'/'">
           <li :class="{active: $route.name === 'news'}">{{ $t('navbar.news') }}</li>
	       </router-link>
          <router-link :to="'/'">
           <li :class="{active: $route.name === 'community'}">{{ $t('navbar.community') }}</li>
	       </router-link>
          <router-link :to="'/'">
           <li :class="{active: $route.name === 'admission'}">{{ $t('navbar.admission') }}</li>
	       </router-link>
          <router-link :to="'/faq'">
           <li :class="{active: $route.name === 'faq'}">{{ $t('navbar.help') }}</li>
	       </router-link>

         </ul>
       </div>        
    </nav>
	</div>
</template>

<script>
	
</script>

<style lang="scss" scoped>
	.active {
		border-bottom: 3px solid black;
	}
	a {
		color: inherit;
		&:hover {
			color: inherit;
		}
	}
	nav {
		background: #ffffff !important;
		border-bottom: 1px solid rgba(0,0,0,.1)
	}
	.wrapper {
		padding: 0px 5vw;
	}
	ul {
		padding: 15px 0px 10px 0px;
		display: flex;
		flex-direction: row;
		align-item: bottom;
	}
		li {
			padding: 10px 10px;
			font-size: 1.2rem;
		}
</style>