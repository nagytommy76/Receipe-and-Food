<template>
  <div class="about">
    <h1>About</h1>
  </div>
</template>
<script>
export default {
  mounted(){
    this.axios.get('https://api.spoonacular.com/recipes/findByIngredients?apiKey=820c397d13094ee6a0e1780f715b0558&ingredients=apples,+flour,+sugar&number=2')
    .then(test =>console.log(test))
  },
}
</script>
