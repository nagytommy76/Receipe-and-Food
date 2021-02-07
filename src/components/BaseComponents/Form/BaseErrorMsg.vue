<template>
    <p class="alert-msg">{{ msg }}</p>
</template>
<script>
export default {
    props:{
        msg: {
            type: String,
            required: true,
        },
    },
}
</script>
<style lang="scss" scoped>
.alert-msg{
    color: #ff0000;
    margin: .3em 0;
    font-size: 1.1em;
}
</style>