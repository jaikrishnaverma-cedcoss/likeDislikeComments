import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { fetchData, persistDatbase } from './Features/DataSlice'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Nav from './Pages/Nav'
import { SideBar } from './Pages/SideBar'
import Signup from './Pages/Signup'

const Routings = () => {
    const selector = useSelector(state => state)
    const dispatch: any = useDispatch()

    // if local storage exist then no need to fetch api
    useEffect(() => {
        if (localStorage.getItem("dataSlice"))
            dispatch(persistDatbase(localStorage.getItem("dataSlice")))
        else
            dispatch(fetchData())
    }, [])

    //   update localstorage when redux state change
    useEffect(() => {
        setTimeout(() => {
            localStorage.setItem("dataSlice", JSON.stringify(selector));
        }, 300)
    }, [selector])


    return (
        <>
            <Nav />
            <div className="col-12 d-flex  px-sm-2 flex-wrap">
                <div className="col-12 col-sm-3 p-3" >
                    <SideBar />
                </div>
                <div className="col-12 col-sm-9 border scroller p-3">

                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/signup' element={<Signup />} />
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default Routings