<template lang="">
    <div class="d-flex">
        <Header :onGoBack="`/`" />
        <div v-if="!isLoading" class="container">    
            <img :src="this.currentCharacter.image" style="width: 500px"/>
            <span></span>
        </div>
        <Loading v-else />
    </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import { Loading, Header } from '@/components'

export default {
    components: { Loading, Header },
    computed: {
        ...mapState('character', ['currentCharacter'])
    },
    methods: {
        ...mapActions('character', ['getCharacter', 'characterList']),
        ...mapMutations(['setIsLoading'])
    },
    async created() {
        if (!this.currentCharacter.id){
            this.setIsLoading(true)
            await this.getCharacter(this.$route.params.id)
            this.setIsLoading(false)
        }
    }
}
</script>
<style lang="">
    
</style>