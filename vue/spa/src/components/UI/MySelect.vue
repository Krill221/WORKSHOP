<template>
    <select @change="changeOption">
      <option default='true' disabled>Choose sort type</option>
      <option v-for="option in options" :key="option.value" :value="option.value">{{ option.name }}</option>
    </select>
</template>
<script>
export default {
  name: 'my-select',
  props: {
    modelValue: {
      type: String
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    changeOption(event){
      this.$emit('update:modelValue', event.target.value)
    }
  },
}
</script>
<style>
select {
  padding: 0.6rem;
  margin: 0rem;
  border: 1px solid teal;
}
</style>