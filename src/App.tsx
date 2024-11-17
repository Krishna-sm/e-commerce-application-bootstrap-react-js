 
import { MainContextProvider } from './context/MainContext'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <MainContextProvider>
      <Navbar/>
          <Outlet/>
    </MainContextProvider>
  )
}

export default App
