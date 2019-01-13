<template>
  <div class="relative rectangle m-b-10" :style="{'background-image': background, height,}">
    <div class="absolute content">
      <h2 class="title is-white is-2">{{title}}</h2>
      <h3 v-if="$mq.resize && $mq.above($mv.tablet)" class="subtitle is-white is-4">{{subtitle}}</h3>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: ['background', 'height', 'title', 'subtitle'],
};
</script>
<style lang="scss" scoped>
.rectangle {
  background-image: url("/fstatic/Header6.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  margin: 0 auto !important;
}
.title {
  text-transform: capitalize;
}
.absolute {
  bottom: 0px;
}
.content {
  padding: 30px;
}
</style>