

import Index from './index'
import { AppProvider } from '../service/context'
function App() {


  return (
    <div>
      <AppProvider>
        <Index></Index>
      </AppProvider>
    </div >
  )
}

export default App
