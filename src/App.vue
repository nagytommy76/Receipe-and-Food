<template>
  <TheNavbar />
  <router-view />
</template>
<script>
import TheNavbar from './components/Navbar/TheNavbar'
export default {
  components:{
    TheNavbar,
  },
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Arimo&display=swap');
*{
  margin: 0;
  padding: 0;
}
body{
  font-family: 'Arimo', sans-serif;
}
a{
  text-decoration: none;
  color: black;
}
</style>
