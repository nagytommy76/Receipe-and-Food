<template>
    <section class="food-container">
        <h1 class="main-title">{{ details.title }}</h1>
        <section class="main-content">
            <img :src="image" alt="Food image">
            <section class="ingredients">
                <span class="ingredients-item" 
                    v-for="ingred in details.extendedIngredients" :key="ingred.id">
                    <!-- <p>name: {{ ingred.name}}</p> -->
                    <tooltip>
                        <template v-slot:item>
                            <img :src="`https://spoonacular.com/cdn/ingredients_100x100/${ingred.image}`" alt="">
                        </template>
                        <template v-slot:text>
                            <p>TEXT</p>                            
                        </template>
                    </tooltip>
                </span>
            </section>
        </section>
    </section>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    props: {
        recipeId: Number
    },
    computed: {
        ...mapGetters({
            RecipeDetails: 'getRecipeDetails',
        }),
        details(){
            return this.findRecipeById()
        },
        image(){
            return this.details.image.replace('312x231', '556x370')
        }
    },
    methods: {
        findRecipeById(){
            return this.RecipeDetails.find(item => item.id == this.recipeId)
        },
    },
}
</script>
<style lang="scss" scoped>
.food-container{
    // margin: 1em 0 3em 0;
    min-height: 60vh;
    .main-title{
        text-align: center;
        font-size: 2.3em;
        margin: 1em 0;
    }
    .main-content{
        display: flex;
        .ingredients{
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            align-items: center;
            &-item{
                display: flex;
                align-items: center;
                justify-content: center;
                height: 150px;
                width: 150px;
            }
        }
    }
}
</style>