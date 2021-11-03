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
        font-size: 40px;
    }
    .loading-container{
        flex-direction: row !important;
        max-width: 100vw;
        min-width: 100vw;
        max-height: 100vh;
        min-height: 100vh;
        pointer-events: none;
        justify-content: center;
        align-items: center;
        position: fixed;
        img{
            width: 50%;
            position: relative;
        }
    }
    @media screen and (max-width: $phone) {
        .loading-text{
            display: none;
        }
    }
</style>