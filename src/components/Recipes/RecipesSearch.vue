<template>
    <aside>Ide jön egy kereső sáv</aside>
    <section class="card-container">
        <div class="card">
            <div class="card-header">
                <img :src="getRecipeInfo.image" alt="Food Image">
            </div>
        </div>
    </section>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name: 'Recipes Search',
    computed:{
        ...mapGetters({
            getRecipeInfo: 'getRecipeInfo',
            getRecipeDetails: 'getRecipeDetails'
        }),
    },
}
</script>
<style lang="scss" scoped>
.card-container{
    height: 80vh;
}
</style>