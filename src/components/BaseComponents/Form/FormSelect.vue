<template>
    <div class="form-control">
        <label :for="name">{{ formName }}</label>
        <select
            class="form-control-input"
            :name="name"
            :id="name"
            v-model="value"
        >
            <option v-for="item in data" :key="item" :value="item">{{ item }}</option>
        </select>
    </div>
</template>
<script>
export default {
    name: 'FormSelect',
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
        name: {
            type: String,
            required: true
        },
        formName: {
            type: String,
            required: true
        },
        data: {
            type: Array || Object,
            required: true,
        },
        modelValue: String,
    }
}
</script>
<style lang="scss" scoped>
     @import '../../../scss/form-control.scss';
</style>