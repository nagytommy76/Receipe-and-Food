<template>
    <div class="tooltip">
        <span class="tooltip-item"><slot name="item"></slot></span>
        <div class="tooltip-text">
            <slot name="text"></slot>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
// .tooltip{
//     &-item{

//     }
// }
</style>