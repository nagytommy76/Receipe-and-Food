<template >
    <section class="header-content">
        <img class="image" :src="getRiecpeImage" alt="Food image">
        <section class="ingredients">
            <ingredient-item />
        </section>
    </section>
</template>
<script>
import IngredientItem from './IngredientItem'
import { mapGetters } from 'vuex'
export default {
    components:{
        IngredientItem,
    },
    computed: {
        ...mapGetters({
            getRiecpeImage: 'getRiecpeImage',
        }),
    },
}
</script>
<style lang="scss" scoped>
.header-content{
    display: flex;
    width: 100%;
    margin-bottom: 1.5em;
    justify-content: center;
    .image{
        width: auto;
        height: 100%;
    }
    .ingredients{
        display: grid;
        grid-template-columns: repeat(4, auto);
        align-items: center;
        justify-items: center;
    }
}

@media(max-width: $extra-large-screen) {
    .header-content{
        .ingredients{
            grid-template-columns: repeat(3, auto);
        }
    }
}
@media(max-width: $large-screen) {
    .header-content{
        flex-direction: column;
        .ingredients{
            grid-template-columns: repeat(4, auto);
        }
    }
}
@media(max-width: $tablet-screen) {
    .header-content{
        flex-direction: column;
        .ingredients{
            grid-template-columns: repeat(3, auto);
        }
    }
}
@media(max-width: $mobile-screen) {
    .header-content{
        .ingredients{
            grid-template-columns: repeat(2, auto);
            justify-items: center;
        }
    }
}
</style>