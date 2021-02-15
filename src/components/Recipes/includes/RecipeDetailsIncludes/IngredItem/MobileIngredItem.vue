<template>
    <section class="mobile-item">
        <img class="mobile-item-image" @click="$emit('open-modal', ingred.id)" :src="`https://spoonacular.com/cdn/ingredients_100x100/${ingred.image}`" alt="Ingredient Image">
        <h3 class="mobile-item-title">{{ ingred.name }}</h3>
        <p class="mobile-item-details">
            {{ ingred.measures.metric.amount }} 
            {{ ingred.measures.metric.unitLong }} 
            {{ ingred.originalName }} 
        </p> 
    </section>
</template>
<script>
export default {
    props:{
        ingred:{
            type: Object,
            required: true
        }
    }
}
</script>
<style lang="scss" scoped>
    .mobile-item{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        &-image{
            text-align: center;
        }
        &-title{
            padding: .2rem 0;
        }
        &-details{
            text-align: center;
            padding: .4rem 0;
        }
    }
</style>