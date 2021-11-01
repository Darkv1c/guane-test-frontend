<template>
  <div class="d-flex index-container">
    <Header title="Rick & Morty" :onGoBack="'11'"/>
    <div class="d-flex flex-1">
      <card-list class="index-card-list"/>
    </div>
    <pagination @onClick="()=>loadPage(routePage)" 
      :lastIndex="lastIndex"/>
  </div>
</template>

<script>
import store from '@/store';
import { mapActions, mapState } from 'vuex';
import { Pagination, CardList, Header } from '@/components';

export default {
  components: { Pagination, CardList, Header },
  methods: {
    ...mapActions('character', ['getCharacterList']),
    /** It loads the page when it's different to the saved in the state */
    async loadPage(page) {
      //if ([this.objectPage, this.objectPage - 1].includes( this.routePage )) return
      store.commit("setIsLoading", true)
      await this.getCharacterList(Math.ceil(page/2))
      store.commit("setIsLoading", false)
    }
  },
  computed: {
    ...mapState('character', ['characterList']),
    routePage() {
      return this.$route.query.page
    },
    objectPage() {
      return this.characterList.info?.page * 2
    },
    lastIndex(){
      return this.characterList.info?.pages * 2
    } 
  },
  async created() {
    await this.loadPage(this.$route.query.page || 1)    
  }
};
</script>

<style lang="scss" scoped>
  .index-container{
    height: 100vh;
  }
  .index-card-list{
    min-height: 70vh;
    margin: auto;
    box-sizing: border-box;
    padding: 2% 5% 2% 5%;
  }
</style>
