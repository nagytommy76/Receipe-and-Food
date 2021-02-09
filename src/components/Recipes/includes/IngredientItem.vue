<template>
    <span class="ingredients-item">
        <tooltip>
            <template v-slot:item>
                <img :src="`https://spoonacular.com/cdn/ingredients_100x100/${ingredImage}`" alt="Ingredient Image">
            </template>
            <template v-slot:text>
                <section class="tooltip-list">
                    <h3>{{ IngredName }}</h3>
                    <p>{{ ingredAmount }} {{ ingredUnitLong }} {{ ingredOriginalName }}</p> 
                </section>                           
            </template>
        </tooltip>
    </span>
</template>
<script>
export default {
    props:{
        ingredImage:{
            type: String,
            required: true,
        },
        IngredName: {
            type: String,
            required: true
        },
        ingredAmount: {
            type: Number,
            required: true,
        },
        ingredUnitLong:{
            type: String,
            required: true
        },
        ingredOriginalName: {
            type: String,
            required: true,
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