import UserStore from './user'
import InfoSectionStore from './info-section'

class RootStore {
  constructor() {
    this.userStore = new UserStore(this)
    this.infoSectionStore = new InfoSectionStore(this)
  }
}

export const rootStore = new RootStore()
