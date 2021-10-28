<template>
  <div class="d-flex flex-1">
    <card-list class="d-flex flex-1"/>
    <pagination/>
  </div>
</template>

<script>
import store from '@/store';
import { mapActions, mapState } from 'vuex';
import { Pagination, CardList }from '@/components';

export default {
  components: { Pagination, CardList },
  methods: {
    ...mapActions('character', ['getCharacterList'])
  },
  computed: {
    ...mapState('character', ['characterList'])
  },
  async created() {
    store.commit("setIsLoading", true)
    await this.getCharacterList(1)
    store.commit("setIsLoading", false)
  }
};
</script>
