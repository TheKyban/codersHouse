import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

import Navigation from './components/shared/Navigation/Navigation'
import Home from './pages/Home/Home'
import Authenticate from './pages/authenticate/Authenticate'
import Activate from './pages/activate/Activate'
import Rooms from './pages/Rooms/Rooms'

import './App.css'

function App() {
  const isAuth = false
  const activated = false

  return (
    <BrowserRouter>

      <Navigation />
      <Routes>

        {/* Guest */}
        <Route path='/' element={<Guest isLogged={isAuth} Component={Home} />} />
        <Route path='/authenticate' element={<Guest isLogged={isAuth} Component={Authenticate} />} />

        {/* SemiProtected */}
        <Route path='/activate' element={<SemiProtected isLogged={isAuth} isActivated={activated} />} />

        {/* Protected */}
        <Route path='/rooms' element={<Protected isLogged={isAuth} isActivated={activated} />} />

      </Routes>

    </BrowserRouter>
  )
}


/**
 * Guest
 */

const Guest = ({ isLogged, isActivated, Component }) => {
  const navitate = useNavigate()

  useEffect(() => {
    /**
     * if user logged but not activated
     */
    if (isLogged && !isActivated) navitate("/activate")

    /**
     * if user logged and activated
     */
    if (isLogged && isActivated) navitate("/rooms")
  }, [])
  return !isLogged && <Component />
}


/**
 * Semi Protected
 */

const SemiProtected = ({ isLogged, isActivated }) => {
  const navigate = useNavigate()

  useEffect(() => {
    /**
     * if user not logged in
     */

    if (!isLogged) navigate("/")

    /**
     * if user logged and Activated
     */

    if (isLogged && isActivated) navigate("/rooms")
  }, [])

  /**
   * if user not Activated
   */
  return (isLogged && !isActivated) && <Activate />
}


/**
 * Protected
 */

const Protected = ({ isLogged, isActivated }) => {
  const navigate = useNavigate()

  useEffect(() => {
    /**
     * if user not logged in
    */

    if (!isLogged) navigate("/")

    /**
     * if user logged but not activated
     */

    if (isLogged && !isActivated) navigate("/activate")

  }, [])

  return (isLogged && isActivated) && <Rooms />
}

export default App