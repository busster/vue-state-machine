<template>
  <div>
    {{ data }}
    <br>
    <button @click="back">back</button>
  </div>
</template>
<script>
import dispatchMixin from '../mixins/dispatch'
export default {
  name: 'Step1',
  mixins: [dispatchMixin],
  data () {
    return {
      data: {}
    }
  },
  mounted () {
    this.data = this.getData(this.$parent)
  },
  methods: {
    back () {
      this.dispatch('goBack')
    }
  }
}
</script>
<style scoped>
</style>
