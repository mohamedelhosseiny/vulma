<template>
  <div>
     <hero :backgroundImage="'/fstatic/Header6.jpg'" :direction="'right'">
     </hero>
     <hero :backgroundImage="'/fstatic/hotel1.png'" :direction="'left'">
     </hero>
     <hero :backgroundImage="'/fstatic/Header6.jpg'" :direction="'right'">
     </hero>
  </div>

</template>

<script>
import { mapState, mapActions } from 'vuex';
import { Carousel, Slide } from 'vue-carousel';
import { mixin as clickaway } from 'vue-clickaway';

export default {
  name: 'hello',
  mixins: [clickaway],
  components: {
    Carousel,
    Slide,
  },
  methods: {
    away: function away() {
      console.log('clicked away');
    },
    paginationCallback: (page) => {
      console.log('pageNumber' + page);
    },
    fetchData: function(){
      const resource = this.$resource('posts/1');
      resource.get().then((response) => {
        this.products = response.body.results;
      });
    },
    ...mapActions([
      'listEntity'
    ]),
  },
  computed: mapState({
    entities: state => state.consumeRest.entities,
    pending: state => state.consumeRest.pending,
    error: state => state.consumeRest.error,
  }),
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      timeAgo:'<timeago since="7/6/1993"></timeago>',
    };
  },
  created: function created() {
    this.listEntity();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  ul{
    ul{
      padding-left:10px;
    }
  }
</style>
