export default {
  methods: {
    dispatch (action, ...args) {
      this.$emit('dispatch', { action, args })
    },
    handleDispatch ({ action, args }) {
      const a = args === undefined ? [] : args
      this.machine.dispatch(action, ...a)
    },
    getData (component) {
      return component.machine.data()
    }
  }
}