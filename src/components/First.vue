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
  mounted () {
    this.name = this.getData(this.$parent).name
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
