<template>
    <span class="ingredients-item" v-for="ingred in singleRecipeDetail.extendedIngredients" :key="ingred.id">
        <tooltip>
            <template v-slot:item>
                <img @click="openModal(ingred.id)" :src="`https://spoonacular.com/cdn/ingredients_100x100/${ingred.image}`" alt="Ingredient Image">
            </template>
            <template v-slot:text>
                <section class="tooltip-list">
                    <h3>{{ ingred.name }}</h3>
                    <p>
                        {{ ingred.measures.metric.amount }} 
                        {{ ingred.measures.metric.unitLong }} 
                        {{ ingred.originalName }} 
                    </p> 
                </section>                           
            </template>
        </tooltip>
    </span>
    <nutrition-modal
        :modalOpen="isModalOpen"
        @close-modal="closeModal"
        :ingredId="selectedIngredId"
    ></nutrition-modal>
</template>
<script>
import { mapGetters } from 'vuex'
import NutritionModal from './IngredItem/NutritionModal'
export default {
    components:{
        NutritionModal,
    },
    data() {
        return {
            isModalOpen: false,
            selectedIngredId: 0
        }
    },
    computed: {
        ...mapGetters({
            singleRecipeDetail: 'getSingleRecipeDetail'
        }),
    },
    methods: {
        openModal(ingredId){
            // Set the selected ingredient's id
            this.selectedIngredId = ingredId
            this.isModalOpen = !this.isModalOpen
        },
        closeModal(){
            this.isModalOpen = false
        }
    },
}
</script>
<style lang="scss" scoped>
.ingredients-item{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 150px;
    width: 150px;
}
</style>