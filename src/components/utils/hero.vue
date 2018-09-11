<template>
  <section class="hero is-header is-medium" :class="{'bottom-align': bottom, 'top-align': top}">
    <div v-if="title" class="category container">
      <h1 class="is-white m-b-25 title is-1">CATEGORY TITLE</h1>
    </div>
    <div class="wrapper" v-else>
      <div class="body" :style="{float: direction}">
        <h1 class="is-white title is-1 m-b-5">Hero Title</h1>
        <h2 class="is-white title is-3 m-b-25">
          Hero Subtitle
        </h2>
        <h3 class="is-white subtitle is-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil excepturi molestias, sequi iure assumenda odit eius quam pariatur! Porro, autem.
        </h3>
      </div>
    </div>
  </section>
</template>
<script>
  export default{
    props: ['backgroundImage', 'direction', 'title', 'top', 'bottom'],
    mounted() {
      if (this.backgroundImage) {
        this.$el.style.backgroundImage = `url(${this.backgroundImage})`;
      }
    },
  };
</script>
<style lang="scss" scoped>
  @import '../../assets/scss/vars.scss';
  .wrapper {
    padding: 2em;
    margin: auto 0;
  }
  h3 {
    padding-top: 20px;
  }
  .hero-body {
    background: gray;
  }
  .body {
    // float: left;
    width: 50%;
    padding: 20px;
    background: #484848;
    background: rgba(160, 96, 96, 0.7);
  }
  .hero{
    // &.is-medium-plus{
    //   .hero-body{
    //     padding:8rem 1.5rem;
    //     min-height: 700px;
    //     // @media screen and (max-width: $mobile){
    //     //   padding: 3rem 0.95rem;
    //     //   min-height: unset;
    //     // }
    //   }
    // }
    // padding: 9em;
    height: 55vh;
    background-size: cover;
    background-repeat:no-repeat;
    background-position: center center;
  }
  .bottom-align {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
  }
  .top-align {
    padding-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }
</style>