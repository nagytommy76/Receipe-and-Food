<template>
    <section class="instruction" v-for="instruction in instructions" :key="instruction">
        <div class="instruction-item" v-for="step in instruction.steps" :key="step.number">
            <div class="images" v-if="step.equipment.length > 0">
                <img 
                    v-for="equip in step.equipment" :key="equip.id"
                    :src="`https://spoonacular.com/cdn/equipment_250x250/${equip.image}`" alt="" class="image" />
            </div>
            <div class="step">
                <h2>Step # {{ step.number }}</h2>
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
    min-height: 10vh;
    margin: 2rem auto;
    justify-content: center;
    display: grid;
    gap: 1.4em;
    grid-template-columns: repeat(2, 45%);

    &-item{
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 1px 1px 10px $dark;
        border-radius: 15px;
        .images{
            display: flex;
            flex-direction: column;
            margin-right: 1rem;
            .image{
                width: 100px;
                height: 100px;
                object-fit: scale-down;
            }
        }
        .step{
            h2{
                text-align: center;
                margin-bottom: 1rem;
            }
            padding: .7em;
            text-align: justify;
        }
    }
}

@media(max-width: $mobile-screen){
.instruction{
    grid-template-columns: 50%;
}
}
</style>