<template>
  <div>
     <landing ></landing>
     <home-cards></home-cards>
  </div>

</template>

<script>
import Landing from '@/components/homepage/landing';
import HomeCards from '@/components/homepage/homeCards';

export default {
  components: {
    Landing,
    HomeCards,
  },
  data() {
    return {
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
