<template>
  <Header/>
  <div class="container d-flex flex-1">
    <router-view />
  </div>
</template>

<script>
import { Header } from '@/components'

export default {
  components: { Header}
}
</script>


<style lang="scss">

//variables

body {
  margin: 0
}

:root{
  //colors
  --clr-green: 107, 254, 68;
  --clr-black: 27, 32, 26;
}

.container{
  background: blue
}

#app {
  width: 100vw;
  min-height: 100vh;
  background-image: url('./assets/background.png');
  background-position: 50% 50%;
  display: flex;
  flex-direction: column;
}

.d-flex{
  display: flex;
  flex-direction: column;
}

.flex-1{
  flex: 1
}


#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
