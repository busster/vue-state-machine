<template>
  <div>
    <label>Name:</label>
    <input v-model="name">
    <button @click="done">done</button>
  </div>
</template>
<script>
import dispatchMixin from '../mixins/dispatch'
export default {
  name: 'Step1',
  mixins: [dispatchMixin],
  data () {
    return {
      name: ''
    }
  },
  methods: {
    done () {
      this.dispatch('completeStepOne', this.name)
    }
  }
}
</script>
<style scoped>
</style>
