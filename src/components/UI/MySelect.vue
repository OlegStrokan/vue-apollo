/* eslint-disable */
<template>
  <select :value="modelValue" @change="changeOption">
  <option disabled value="">Choice item</option>
  <option
      v-for="option in options"
      :key="option.value"
      :value="option.value"
  >{{option.name}}</option>
</select>
</template>

<script>
export default {
  name: "MySelect",

  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    changeOption(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>

</style>