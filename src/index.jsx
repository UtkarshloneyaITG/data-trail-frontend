import React, { useContext } from 'react'
import AuthPage from '../pages/login-signup'
import { AppContext } from '../service/context'

function Index() {
  const { isAutherise } = useContext(AppContext)
  return (<>
    {isAutherise ? <>"hello world"</> : <AuthPage />}
  </>
  )
}

export default Index