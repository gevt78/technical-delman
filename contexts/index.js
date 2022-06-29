import { createContext } from 'react'

import { rootStore } from '../stores'

const StoreContext = createContext(rootStore)

export default StoreContext
