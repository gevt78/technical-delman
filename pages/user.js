import { observer } from 'mobx-react'
import React, { useEffect, useState } from 'react'
import CustomTable from '../components/table'
import { useStores } from '../hooks'

const CELL = [
  'id',
  'name',
  'email',
  'country_name',
  'device_id',
  'bitcoin_address',
  'avatar',
  'login_ip',
  'active_device_mac',
  'notes',
  'age',
  'referral_id',
  'locale',
  'favorite_music',
  'phone_number',
  'twitter_username',
  'job',
  'invoice_email_address',
  'hmac_secret',
  'favorite_quote',
  'primary_color',
  'secondary_color',
  'material',
  'shipping_address',
  'zip_code',
  'latitude',
  'longitude',
  'favorite_animal',
  'app_version',
  'timezone',
]

const User = () => {
  const { userStore } = useStores()
  const [list, setList] = useState([])

  useEffect(() => {
    const fetch = async () => {
      const res = await userStore.fetchUser()
      setList(res.data)
    }
    fetch()
  }, [])

  return (
    <div>
      {list.length && (<CustomTable data={list} cell={CELL} />)}
    </div>
  )
}

export default observer(User)
