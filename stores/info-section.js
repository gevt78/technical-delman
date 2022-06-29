import {
  makeObservable,
  observable,
  action,
} from 'mobx'

export default class InfoSectionStore {
  selected = null

  constructor() {
    makeObservable(this, {
      selected: observable,
      reset: action,
      select: action,
      replace: action,
    })
  }

  reset = () => {
    this.selected = null
  }

  select = (selected) => {
    if (this.selected && this.selected.id === selected.id) {
      this.selected = null
      return
    }
    this.selected = selected
  }

  replace = (newValue) => {
    this.selected = { ...newValue }
  }
}
