<template lang="">
    <div v-for="(character, n) of characterList" v-bind:key="'card'+n">
        <Card :object="character"/>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import { Card } from './Card.vue'

export default {
    components: {Card},
    methods: {
        ...mapState('character', ['characterList'])
    }
}
</script>
<style lang="">
    
</style>