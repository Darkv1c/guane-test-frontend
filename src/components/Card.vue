<template lang="">
    <div class="card-container" :style="`background-image: url('${object.image}')`">
        <span>Name: {{object.name}}</span>
        <span> </span>
        <span></span>
        <span></span>
    </div>
</template>
<script>
export default {
    props: {
        /** info to show in the cart */
        object: Object
    }
}
</script>
<style lang="scss">
    .card-container {
        background-size: cover;
        max-width: 15%;
        min-width: 150px;
        border-radius: 40px;
        margin: 12px;
        aspect-ratio: 1/1;
        flex: 1 1 25%;
    }
</style>