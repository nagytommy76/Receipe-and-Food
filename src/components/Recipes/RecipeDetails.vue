<template>
    <section class="food-container">
        <h1 class="main-title">{{ details.title }}</h1>
        <section class="main-content">
            <img class="image" :src="image" alt="Food image">
            <section class="ingredients">
                <span class="ingredients-item" 
                    v-for="ingred in details.extendedIngredients" :key="ingred.id">
                    <tooltip>
                        <template v-slot:item>
                            <img :src="`https://spoonacular.com/cdn/ingredients_100x100/${ingred.image}`" alt="">
                        </template>
                        <template v-slot:text>
                            <section class="tooltip-list">
                                <h3>{{ ingred.name }}</h3>
                                <p>{{ ingred.measures.metric.amount }} {{ ingred.measures.metric.unitLong }} {{ ingred.originalName }}</p> 
                            </section>                           
                        </template>
                    </tooltip>
                </span>
            </section>
        </section>
        <section class="summary">
            <p class="summary-text" v-html="details.summary"></p>
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
    min-height: 70vh;
    .main-title{
        text-align: center;
        font-size: 2.3em;
        margin: 1em 0;
    }
    .main-content{
        display: flex;
        .image{
            height: 60%;
        }
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
    .summary{
        width: 90%;
        margin: auto;
        &-text{
            padding: 1em;
            background-color: #eee;
            line-height: 1.1em;
            text-align: justify;
        }
    }
}

.tooltip-list{
    h3{
        margin-bottom: .5rem;
    }
}
</style>