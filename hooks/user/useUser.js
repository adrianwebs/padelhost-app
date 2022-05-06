import { useState, useEffect} from 'react'

import { useRouter } from 'next/router'
import { onAuthStateChangedUser } from '../../firebase/client'

function useUser() {
  const [user, setUser] = useState(undefined)
  const router = useRouter()

  useEffect(() => {
    onAuthStateChangedUser(setUser)
  }, [])

  useEffect(() => {
    user === null && router.push('/login')
  }, [user])
  
  
    return user
}

export default useUser