import { makeAutoObservable } from 'mobx'

import * as srv from '../services'
// import handleError from '../services/error-handler'

export default class UserStore {
  currentPage = 0

  loading = false

  dialog = {
    receive: false,
  }

  list = []

  user = []

  processing = false

  detail = null

  error = ''

  constructor() {
    makeAutoObservable(this)
  }

  * fetchSales(params) {
    try {
      this.loading = true
      const res = yield srv.fetchSales(params)
      if (!res.ok) console.log(res)
      this.list = res.data
      return res.data
    } catch (err) {
      return false
    } finally {
      this.loading = false
    }
  }

  * fetchUser(params) {
    try {
      this.loading = true
      const res = yield srv.fetchUsers(params)
      if (!res.ok) console.log(res)
      this.user = res.data
      return res.data
    } catch (err) {
      return false
    } finally {
      this.loading = false
    }
  }

  * saveUser(user) {
    try {
      this.processing = true
      const res = yield srv.createUser(user)
      if (!res.ok) {
        this.error = res.data.message
      }
      return res.data
    } catch (err) {
      return false
    } finally {
      this.processing = false
    }
  }
}
