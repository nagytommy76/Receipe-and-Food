<template>
    <button class="btn" :class="subClass">
        {{ text }}
    </button>
</template>
<script>
export default {
    props:{
        text: {
            tpye: String,
            required: true,
        },
        subClass:{
            type: String,
            required: false,
            default: 'btn-primary'
        }
    },
}
</script>
<style lang="scss" scoped>
.btn{
    width: 9em;
    height: 3em;
    font-size: 1.1em;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    text-transform: uppercase;
    &:focus{
        outline: none;
    }
    &-primary{
        background-color: transparent;
        color: white;
        border: 3px solid $btn-primary;
        transition: all .2s ease;
        &:hover{
            background-color: $btn-primary;
            color: black;
        }
    }
}
</style>