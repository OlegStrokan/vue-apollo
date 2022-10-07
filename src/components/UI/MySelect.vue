<template>
<select v-model="modelValue" @change="changeOption">
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
      this.$emit('update:modelValue', event)
    }
  }
}
</script>

<style scoped>

</style>