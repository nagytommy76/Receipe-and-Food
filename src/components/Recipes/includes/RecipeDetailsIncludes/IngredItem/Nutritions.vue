<template>
    <ul class="ingred">
        <li class="ingred-item" v-for="nutrition in nutritions" :key="nutrition.name">
            <p class="ingred-item-name">{{ nutrition.name }} : </p>
            <p class="ingred-item-unit">{{ nutrition.amount }} 
            {{ nutrition.unit }}</p>
        </li>
    </ul>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    props:{
        ingredId:{
            type: Number
        }
    },
    computed:{
        ...mapGetters({
            getSingleRecipeDetail: 'getSingleRecipeDetail'
        }),
        nutritions(){
            const foundNutrition = this.getSingleRecipeDetail.nutrition.ingredients.find(item =>item.id == this.ingredId)
            return foundNutrition.nutrients
        },
    },
}
</script>
<style lang="scss" scoped>
.ingred{
    display: flex;
    flex-direction: column;
    align-items: center;
    &-item{
        width: 250px;
        text-align: left;
        list-style: none;
        padding: .15rem 0;
        display: flex;
        justify-content: space-between;
    }
}
</style>