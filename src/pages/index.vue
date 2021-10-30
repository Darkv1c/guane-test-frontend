<template>
  <div class="d-flex index-container">
    <Header/>
    <div class="d-flex flex-1">
      <card-list class="index-card-list"/>
    </div>
    <pagination/>
  </div>
</template>

<script>
import store from '@/store';
import { mapActions, mapState } from 'vuex';
import { Pagination, CardList, Header } from '@/components';

export default {
  components: { Pagination, CardList, Header },
  methods: {
    ...mapActions('character', ['getCharacterList'])
  },
  computed: {
    ...mapState('character', ['characterList']),
    ...mapState(['currentPage'])
  },
  async created() {
    store.commit("setIsLoading", true)
    await this.getCharacterList(this.currentPage)
    store.commit("setIsLoading", false)
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
    padding: 4% 10% 2% 10%;
  }
</style>
