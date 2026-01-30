//utils
import { Routes, Route } from "react-router-dom";
import { useState } from 'react'
import { IoMdSend } from "react-icons/io";
import React from 'react'
//components
import HomePage from './assets/components/HomePage'
//previous error on renaming the below file
import Direct from './assets/components/DIrect'
//import Notifications from './assets/components/Notifications'
import Reels from './assets/components/Reels'
import Search from './assets/components/Search'
import Profile from './assets/components/Profile'
import Navigation from './Navigation'
import SingleConversation from './assets/components/SingleConversation'
//files
import conversationsFile from './assets/conversations.js'
//icons
import { IoMdHeartEmpty } from "react-icons/io";


//style
import './App.css'

function App() {

  const [loading, setLoading] = useState(false)

  const [conversations, setConversations] = useState(conversationsFile)

  return (
    <div className="relative bg-white">
      <header className={`flex items-center pt-1 bg-gray-200 border-b border-gray-300 sticky top-0 z-50 text-black ${loading && "w-[100vw]"}`}>
        <div className="name flex-6 ps-6">
          <span>FAKE</span>
          <img src="/public/Instagram-Logo-No-Background.png" className="w-[150px] mx-auto p-1 inline" alt="" />
        </div>
        <div className="flex-1">
          <button><IoMdHeartEmpty size={25}/></button>
        </div>
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
                <Route path='/direct' element={<Direct conversations={conversations} setConversations={setConversations} />} />
                <Route path='/reels' element={<Reels />} />
                <Route path='/search' element={<Search />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/conversation/:id' element={<SingleConversation conversations={conversations} setConversations={setConversations} />} />
              </Routes>
            </>
          )
      }
      <Navigation setLoading={setLoading} />
    </div>
  )
}

export default App
