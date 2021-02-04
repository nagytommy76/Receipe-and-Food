<template>
    <aside>Ide jön egy kereső sáv</aside>
    <section class="card-container">
        <base-receipe-card
            :title="getRecipeDetails.title"
            :image="getRecipeDetails.image"
            :readyInMinutes="getRecipeDetails.readyInMinutes"
        ></base-receipe-card>
    </section>
</template>
<script>
import { mapGetters } from 'vuex'
import BaseRecipeCard from './includes/BaseRecipeCard'
export default {
    name: 'Recipes Search',
    computed:{
        ...mapGetters({
            getRecipeDetails: 'getRecipeDetails'
        }),
    },
    data() {
        return {
            isOverlay: false,
        }
    },
    components:{
        'base-receipe-card' : BaseRecipeCard,
    },
    mounted() {
        // this.axios.get('recipes/complexSearch?apiKey=820c397d13094ee6a0e1780f715b0558&query=pasta&addRecipeInformation=true&fillIngredients=true')
        // .then(result => console.log(result))
    },
}
</script>
<style lang="scss" scoped>
.card-container{
    margin-top: 1em;
    min-height: 80vh;
    display: grid;
    gap: 2em;
    justify-content: center;
    grid-template-columns: 34em 34em;
}
</style>