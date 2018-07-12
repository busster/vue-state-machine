<template>
  <div>
    {{ data }}
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
  }
}
</script>
<style scoped>
</style>
