<template>
    <span class="ingredients-item" v-for="ingred in extendedIngreds" :key="ingred.id">
        <tooltip>
            <template v-slot:item>
                <img @click="openModal" :src="`https://spoonacular.com/cdn/ingredients_100x100/${ingred.image}`" alt="Ingredient Image">
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
        <nutrition-modal
            :ingredId="ingred.id"
            :ingredNutrition="ingredNutrition"
        ></nutrition-modal>
    </span>
</template>
<script>
import NutritionModal from './IngredItem/NutritionModal'
export default {
    components:{
        NutritionModal,
    },
    props:{
        extendedIngreds: {
            type: Array,
            required: true,
        },
        ingredNutrition:{
            type: Array,
            required: true
        },
    },
    methods: {
        openModal(){
            console.log('csá')
        }
        // showNutritionModal(ingredId){
        //     this.$emit('open-modal', ingredId)
        //     console.log('nyiss')
        // }
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