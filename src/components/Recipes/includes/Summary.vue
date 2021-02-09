<template>
    <section class="summary">
        <p class="summary-text" v-html="summaryText"></p>
    </section>
</template>
<script>
export default {
    props: {
        summaryText: {
            type: String,
            required: true,
        }
    }
}
</script>
<style lang="scss" scoped>
.summary{
    width: 90%;
    margin: auto;
    &-text{
        padding: 1em;
        background-color: #eee;
        line-height: 1.1em;
        text-align: justify;
    }
}
</style>