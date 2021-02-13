<template>
    <ul>
        <li v-for="nutrition in nutritions.nutrients" :key="nutrition.id">
            {{ nutrition.name }} : 
            {{ nutrition.amount }} 
            {{ nutrition.unit }}
        </li>
    </ul>
</template>
<script>
export default {
    props:{
        ingredId: {
            type: Number,
            required: true
        },
        ingredNutrition:{
            type: Array,
            required: true
        }
    },
    computed:{
        nutritions(){
            return this.ingredNutrition.find(item => item.id == this.ingredId)
        }
    }
}
</script>
<style lang="">
    
</style>