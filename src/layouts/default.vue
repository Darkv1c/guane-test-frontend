<template>
  <div> 
    <transition name="fade" :key="$route.pathname">    
      <router-view />
    </transition>
  </div>
</template>

<style scoped>
  @keyframes transition {
    from{
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
</style>
