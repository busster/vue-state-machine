export default class Machine {
  constructor (router, state) {
    this.router = router
    this.state = state || 'First'
    this.changeStateTo(this.state)
    this._data = {
      name: '',
      drinks: []
    }
  }
  data () {
    return this._data
  }
  dispatch (actionName, ...payload) {
    const action = this.transitions()[this.state][actionName]
    if (action) {
      action.apply(this, payload)
    }
  }
  changeStateTo (newState) {
    this.state = newState
    this.router.push({name: this.transitions()[this.state].route})
  }
  transitions () {
    return {
      'First': {
        route: 'First',
        completeStepOne: (name) => {
          this._data.name = name
          this.changeStateTo('Second')
        }
      },
      'Second': {
        route: 'Second',
        completeStepTwo: (drinks) => {
          this._data.drinks = drinks
          this.changeStateTo('Done')
        },
        goBack: () => {
          this.changeStateTo('First')
        }
      },
      'Done': {
        route: 'Done',
        goBack: () => {
          this.changeStateTo('Second')
        }
      }
    }
  }
}
