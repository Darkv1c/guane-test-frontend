<template lang="">
    <div v-if="!isLoading" class="d-flex" style="color: white; font-size: 72px">
        <img :src="this.currentCharacter.image"/>
        <img :src="this.currentCharacter.image"/>
    </div>
    <Loading v-else />
</template>
<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import { Loading } from '@/components'

export default {
    comments: { Loading },
    computed: {
        ...mapState('character', ['currentCharacter'])
    },
    methods: {
        ...mapActions('character', ['getCharacter']),
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