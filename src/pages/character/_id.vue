<template lang="">
    <div style="color: white; font-size: 72px">
        {{this.currentCharacter}}
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
    computed: {
        ...mapState('character', ['currentCharacter'])
    },
    methods: {
        ...mapActions('character', ['getCharacter'])
    },
    async created() {
        if (!this.currentCharacter.id){
            console.log(this.$route.params.id)
            await this.getCharacter(this.$route.params.id)
        }
    }
}
</script>
<style lang="">
    
</style>