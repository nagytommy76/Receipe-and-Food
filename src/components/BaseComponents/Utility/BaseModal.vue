<template>
    <transition name="background">
        <section class="fade-in"></section>
    </transition>
    <transition name="modal">
        <section class="modal">
            <slot name="content"></slot>
        </section>
    </transition>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    
</style>