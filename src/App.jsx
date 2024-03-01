import './App.css'
import Header from './components/Header/Header'
import SideBar from './components/Header/SideBar'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className=' h-full'>
      <Header />
      <SideBar/>
      <Outlet />
    </div>
  )
}

export default App
