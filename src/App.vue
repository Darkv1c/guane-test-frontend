<template>
  <div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');

//default
body {
  margin: 0;
  font-family: 'Indie Flower', cursive;
  color: rgb(var(--clr-black));
  font-weight: 600;
}

//variables
:root{
  //colors
  --clr-green: 107, 254, 68;
  --clr-black: 27, 32, 26;
}

#app {
  width: 100vw;
  min-height: 100vh;
  background-image: url('./assets/background.png');
  background-position: 50% 50%;
  background-size: 100%, 100%;
  display: flex;
  flex-direction: column;
}

//common classes
.d-flex{
  display: flex;
  flex-direction: column;
}

.flex-1{
  flex: 1
}

.c-pointer{
  cursor: pointer;
}

.neon-text{  
  color: transparent;
  -webkit-text-stroke: 1.5px rgb(var(--clr-green));
}

</style>
