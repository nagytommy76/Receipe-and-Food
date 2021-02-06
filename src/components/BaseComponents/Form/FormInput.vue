<template>
    <div class="form-control">
        <label :for="name">{{ formName }}</label>
        <input 
            autocomplete="off"
            class="form-control-input"
            :id="name"
            :type="type"
            :name="name"
            v-model="value"
        />
    </div>
</template>
<script>
export default {
    name: 'FormInput',
    computed: {
        value: {
            get(){
                return this.modelValue
            },
            set(value){
                this.$emit('update:modelValue', value)
            }
        }
    },
    props: {
        type: {
            type: String,
            required: false,
            default: 'text',
        },
        name: {
            type: String,
            required: true
        },
        formName: {
            type: String,
            required: true
        },
        // A parent (BaseSearchSection) tesz rá egy model-value prop-ot és egy update:modelValue emit-et
        // így látom a base componentben az adatokat
        modelValue: String,
    }
}
</script>
<style lang="scss" scoped>
    @import '../../../scss/form-control.scss';
</style>