<template lang="">
    <div class="card-list-container d-flex">
        <Card :object="character" v-for="(character, n) of results" 
            v-bind:key="'card'+n" />
    </div>
</template>
<script>
import { mapState } from 'vuex'
import { Card } from '@/components'

export default {
    components: { Card },
    computed: {
        ...mapState('character', ['characterList']),
        ...mapState(['currentPage']),
        results(){
            if (this.characterList.results){
                return this.currentPage % 2 ? this.characterList.results.slice(0, 10) : 
                this.characterList.results.slice(10, 20)
            }
            else {
                return []
            }
        }
    }
}
</script>
<style lang="scss">
    .card-list-container{
        flex-direction: row !important;
        flex-wrap: wrap;
        width: 100%;
        box-sizing: border-box;
        max-height: 40vh;
        overflow-y: scroll;
        justify-content: center;
    }
</style>