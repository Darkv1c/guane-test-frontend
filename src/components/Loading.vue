<template lang="">
    <div class="loading-container d-flex ">
        <img src="@/assets/loading.gif"/>
        <span class="loading-text">LOADING...</span>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .loading-text{
        position: absolute; 
        color: white; 
        font-size: 75px;
    }
    .loading-container{
        flex-direction: row !important;
        max-width: 70vh;
        min-width: 70vh;
        aspect-ratio: 1/1;
        justify-content: center;
        align-items: center;
    }
</style>