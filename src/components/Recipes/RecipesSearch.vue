<template>
    <section class="container">
    <base-search-section></base-search-section>
        <section class="card-container">
            <!-- <base-receipe-card
                :title="getRecipeDetails.title"
                :image="getRecipeDetails.image"
                :readyInMinutes="getRecipeDetails.readyInMinutes"
            ></base-receipe-card>
            <base-receipe-card
                :title="getRecipeDetails.title"
                :image="getRecipeDetails.image"
                :readyInMinutes="getRecipeDetails.readyInMinutes"
            ></base-receipe-card> -->
        </section>
    </section>
</template>
<script>
import { mapGetters } from 'vuex'
// import BaseRecipeCard from './includes/BaseRecipeCard'
import BaseSearchSection from './includes/BaseSearchSection'
export default {
    name: 'RecipesSearch',
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
        // 'base-receipe-card' : BaseRecipeCard,
        'base-search-section' : BaseSearchSection,
    },
    mounted() {
        // console.log(process.env.VUE_APP_API_KEY_URL)
        // this.axios.get('recipes/complexSearch?apiKey=820c397d13094ee6a0e1780f715b0558&query=pasta&addRecipeInformation=true&fillIngredients=true')
        // .then(result => console.log(result))
    },
}
</script>
<style lang="scss" scoped>
.container{
    margin-top: 2em;
    min-height: 80vh;
    .card-container{
        display: grid;
        gap: 2em;
        justify-content: center;
        grid-template-columns: 34em 34em;

    }
}
</style>