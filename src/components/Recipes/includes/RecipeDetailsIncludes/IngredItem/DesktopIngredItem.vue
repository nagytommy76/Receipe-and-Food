<template>
    <tooltip>
        <template v-slot:item>
            <img @click="$emit('open-modal', ingred.id)" :src="`https://spoonacular.com/cdn/ingredients_100x100/${ingred.image}`" alt="Ingredient Image">
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
<style lang="">
    
</style>