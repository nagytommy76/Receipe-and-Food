<template>
    <base-modal>
        <nutritions
            :ingredId="ingredId"
            :ingredNutrition="ingredNutrition"
        />
    </base-modal>
</template>
<script>
import Nutritions from './Nutritions'
export default {
    components:{
        Nutritions,
    },
    props:{
        ingredId:  {
            type: Number,
            required: true
        },
        ingredNutrition: {
            type: Array,
            required: true,
        }
    }
}
</script>
<style lang="">
    
</style>