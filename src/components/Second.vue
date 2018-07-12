<template>
  <div>
    <input type="checkbox" value="Gin" v-model="drinks">
    <label>Gin</label>
    <input type="checkbox" value="Vodka" v-model="drinks">
    <label>Vodka</label>
    <input type="checkbox" value="Rum" v-model="drinks">
    <label>Rum</label>
    <br>
    <button @click="done">done</button>
  </div>  
</template>
<script>
import dispatchMixin from '../mixins/dispatch'
export default {
  name: 'Step2',
  mixins: [dispatchMixin],
  data () {
    return {
      drinks: []
    }
  },
  methods: {
    done () {
      this.dispatch('completeStepTwo', this.drinks)
    }
  }
}
</script>
<style scoped>
</style>
