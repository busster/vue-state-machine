<template>
  <div>
    <router-view @dispatch="handleDispatch"/>
    <br>
    <br>
    <br>
    <button @click="debug">debug</button>
  </div>
</template>
<script>
import Machine from '../models/Machine'
import dispatchMixin from '../mixins/dispatch'
import VueRouter from '../router'
export default {
  name: 'Parent',
  mixins: [dispatchMixin],
  data () {
    return {
      machine: new Machine(VueRouter)
    }
  },
  methods: {
    debug () {
      debugger
    }
  }
}
</script>
<style scoped>
</style>
