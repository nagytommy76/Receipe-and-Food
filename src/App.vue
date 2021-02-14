<template>
  <TheNavbar />
  <router-view />
  <TheFooter />
</template>
<script>
import { mapMutations } from 'vuex'
import TheNavbar from './components/PageSections/TheNavbar'
import TheFooter from './components/PageSections/TheFooter'
export default {
  components:{
    TheNavbar,
    TheFooter,
  },
  created(){
    this.checkScreenWidth()
  },
  methods:{
    ...mapMutations({
      checkScreenWidth: 'setScreenWidth'
    }),
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
  // background: $navbar-bg;
  // color: white;
}
a{
  text-decoration: none;
  color: black;
}
</style>
