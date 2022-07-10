import { useEffect, useState } from 'react'

import Loading from './Loading'
import Users from './Users'
import Warning from './Warning'

function App() {

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [selected, setSelected] = useState(null)
  const [error, setError] = useState(null)
  const [tries, setTries] = useState(0)

  useEffect(() => {
    setLoading(true)
    fetch(`https://reqres.in/api/users?delay=2&${tries}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('unable to fetch data')
        }
        return res.json()
      })
      .then(result => {
        return setUsers(result.data)
      })
      .catch(err => {
        console.log(err)
        setError(err)
      })
      .finally(() => setLoading(false))
  }, [tries])

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Warning tryAgain={() => setTries(tries + 1)} />
  }

  return <>
    <div>
      <h1>{users.length} Users</h1>
      <Users users={users} onSelected={user => { setSelected(user) }} />
      {selected && `${selected.first_name} ${selected.last_name}`}
    </div>
  </>
}

export default App