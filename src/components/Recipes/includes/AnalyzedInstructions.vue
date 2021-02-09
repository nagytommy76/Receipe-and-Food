<template>
    <section class="instruction" v-for="instruction in instructions" :key="instruction">
        <div class="instruction-item" v-for="step in instruction.steps" :key="step.number">
            <h2>Step # {{ step.number }}</h2>
            <div class="images">
                <img 
                    v-for="equip in step.equipment" :key="equip.id"
                    :src="`https://spoonacular.com/cdn/equipment_250x250/${equip.image}`" alt="" class="image" />
            </div>
            <div class="step">
                <p>{{ step.step }}</p>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'AnalyzedInstructions',
    props: {
        instructions: {
            type: Array || Object,
            required: true,
        }
    }
}
</script>
<style lang="scss" scoped>
.instruction{
    min-height: 45vh;
    margin: 2rem auto;
    display: grid;
    gap: 1em;
    grid-template-columns: repeat(2, auto);
    // grid-auto-columns: 2fr;

    &-item{
        display: flex;
        .images{
            display: flex;
            flex-direction: row;
            .image{
                width: 150px;
                height: 150px;
                object-fit: scale-down;
            }
        }
        .step{
            text-align: justify;
        }
    }
}
</style>