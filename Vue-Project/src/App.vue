<template>
  <div id="app">
    <!-- <oneThing :title="titleMsg"></oneThing>
    <footerDiv></footerDiv> -->
  
  <router-view></router-view>

  <footer>
    <router-link  to = "/onething">oneThing</router-link>
    <router-link  to ="/all">All</router-link>
  </footer>

  </div>
</template>

<script>


export default {
  name: 'app',
  data () {
    return {

    }
  },
  components: {
  }
}

</script>

<style scoped>
footer {
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100px;
  background: #ccc;
}
a {
  margin-top: 20px;
  text-decoration: none;
}
#app {
  font-size: 50px;
}
</style>
