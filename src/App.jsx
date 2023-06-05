import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Navigation from './components/shared/Navigation/Navigation'
import Home from './pages/Home/Home'
import Authenticate from './pages/authenticate/Authenticate'
import Activate from './pages/activate/Activate'
import Rooms from './pages/Rooms/Rooms'
import { LoadingWithRefresh } from './hooks/useLoadingWithRefresh'

import './App.css'

import { useSelector } from 'react-redux'
import Loader from './components/shared/Loader/Loader'
import Room from './pages/Room/Room'

function App() {

  const { loading } = LoadingWithRefresh()

  return loading ?
    <Loader message={"Loading, please wait"} /> :
    (
      <BrowserRouter>

        <Navigation />
        <Routes>

          {/* Guest */}
          <Route path='/' element={<Guest Component={Home} />} />
          <Route path='/authenticate' element={<Guest Component={Authenticate} />} />

          {/* SemiProtected */}
          <Route path='/activate' element={<SemiProtected />} />

          {/* Protected */}
          <Route path='/rooms' element={<Protected />} Component={Rooms} />
          <Route path='/room/:id' element={<Protected />} Component={Room}/>

        </Routes>

      </BrowserRouter>
    )
}


/**
 * Guest
 */

const Guest = ({ Component }) => {
  let { isAuth, user } = useSelector(state => state.auth)

  const navitate = useNavigate()

  useEffect(() => {
    /**
     * if user logged but not activated
     */
    // if (isAuth && !user.activated) navitate("/activate")
    if (isAuth) navitate("/activate")

    /**
     * if user logged and activated
     */
    if (isAuth && user.activated) navitate("/rooms")
  }, [isAuth, user])
  return !isAuth && <Component />
}


/**
 * Semi Protected
 */

const SemiProtected = ({ }) => {
  let { isAuth, user } = useSelector(state => state.auth)

  const navigate = useNavigate()

  useEffect(() => {
    /**
     * if user not logged in
     */

    if (!isAuth) navigate("/")

    /**
     * if user logged and Activated
     */

    if (isAuth && user.activated) navigate("/rooms")
  }, [isAuth, user.activated])

  /**
   * if user not Activated
   */
  return (isAuth && !user.activated) && <Activate />
}


/**
 * Protected
 */

const Protected = ({ Component }) => {
  let { isAuth, user } = useSelector(state => state.auth)

  const navigate = useNavigate()

  useEffect(() => {
    /**
     * if user not logged in
    */

    if (!isAuth) navigate("/")

    /**
     * if user logged but not activated
     */

    if (isAuth && !user.activated) navigate("/activate")

  }, [isAuth, user.activated])

  return (isAuth && user.activated) && <Component />
}

export default App