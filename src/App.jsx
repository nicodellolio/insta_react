//utils
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react'
import { IoMdSend } from "react-icons/io";
import React from 'react'
//components
import HomePage from './assets/components/HomePage'
//previous error on renaming the below file
import Direct from './assets/components/DIrect'
//import Notifications from './assets/components/Notifications'
import Navigation from './Navigation'
//style
import './App.css'

function App() {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    console.log(loading);
  }, [loading])

  return (
    <div className="relative bg-white">
      <header className={`bg-gray-200 border-b border-gray-300 sticky top-0 z-50 text-black mb-5 ${loading && "w-[35vw]"}`}>
        <span>FAKE</span>
        <img src="/public/Instagram-Logo-No-Background.png" className="w-[150px] mx-auto p-1 inline" alt="" />
      </header>
      {
        loading ?
          (
            <div className="h-[100vh] flex justify-center items-center">
                <div className="w-30 h-30 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
            </div>
          ) : (
            <>
              <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/direct' element={<Direct />} />
              </Routes>
            </>
          )
        }
        <Navigation setLoading={setLoading} />
    </div>
  )
}

export default App
