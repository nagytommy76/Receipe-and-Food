<template>
    <section class="nutrient">
        <h1 class="nutrient-title">Nutrients</h1>
        <ul class="nutrient-list">
            <li class="nutrient-list-item" v-for="nutrient in nutrients" :key="nutrient.name">
                <h4 class="name">{{ nutrient.name }}: </h4>
                <p class="amount">{{ nutrient.amount }} {{ nutrient.unit }}</p>
                <p class="needs">Daily needs: {{ nutrient.percentOfDailyNeeds }}%</p>
            </li>
        </ul>
    </section>
</template>
<script>
export default {
    props:{
        nutrients:{
            type: Array,
            required: true
        }
    }
}
</script>
<style lang="scss" scoped>
.nutrient{
    width: 100%;
    margin: 1.5em 0;
    &-title{
        font-size: 2.5em;
        text-align: center;
        margin: 1em 0;
    }
    &-list{
        display: grid;
        grid-template-columns: repeat(4, auto);
        gap: 1em;
        &-item{
            border-radius: 5px;
            border: 3px solid $footer-bg;
            padding: .2em;
            display: grid;
            .name, .amount, .needs{
                padding: .1em 0;
            }
        }
    }
}

@media (max-width: $tablet-screen) {
    .nutrient{
        &-list{
            grid-template-columns: repeat(3, auto);
        }
    }
}
@media (max-width: $mobile-screen) {
    .nutrient{
        width: 85%;
        margin: auto;
        &-list{
            justify-content: center;
            grid-template-columns: repeat(2, auto);
        }
    }
}
</style>