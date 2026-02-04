//utils
import { Routes, Route, useLocation, matchPath, Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import React from 'react'
import { AnimatePresence } from 'framer-motion'
//components
import HomePage from './assets/components/HomePage'
import Direct from './assets/components/Direct'
import NotificationsSection from './assets/components/NotificationsSection.jsx'
import Reels from './assets/components/Reels'
import Search from './assets/components/Search'
import Profile from './assets/components/Profile'
import Navigation from './Navigation'
import SingleConversation from './assets/components/SingleConversation'
import InputMessage from './assets/components/InputMessage'
//files
import conversationsFile from './assets/conversations.js'
//icons
import { IoMdHeartEmpty } from "react-icons/io";
import { FaPenToSquare } from "react-icons/fa6";
//style
import './App.css'

function App() {

  const [loading, setLoading] = useState(false)

  const [loggedUser] = useState({ accountName: "obviouslinico", userName: "Nico", postsCount: 166, followersCount: 983, followingCount: 1395, bio: "Definitely not my insta profile" })

  const [conversations, setConversations] = useState(() => {
    const saved = localStorage.getItem("conversations");
    return saved ? JSON.parse(saved) : conversationsFile;
  });

  useEffect(() => {
    localStorage.setItem("conversations", JSON.stringify(conversations))
  }, [conversations])

  const location = useLocation()

  // Recupero l'id della conversazione se siamo in quella rotta
  const conversationMatch = matchPath("/conversation/:id", location.pathname);
  const conversationId = conversationMatch?.params?.id;

  const showYBanners = location.pathname.startsWith("/conversation") || location.pathname.startsWith("/notifications") || location.pathname.startsWith("/follow") ? false : true

  return (
    <div className="relative bg-white">
      {showYBanners && (
        <header className={`flex items-center pt-1 bg-gray-200 border-b border-gray-300 sticky top-0 z-20 text-black ${loading && "w-[100vw]"}`}>
          <div className="name flex-6 ps-6">
            <span>FAKE</span>
            <img src="/public/Instagram-Logo-No-Background.png" className="w-[150px] mx-auto p-1 inline" alt="" />
          </div>
          <div className="flex-1">
            {location.pathname == "/direct" ?
              <FaPenToSquare size={25} />
              :
              <Link to='/notifications' className="!bg-transparent"><IoMdHeartEmpty size={25} color="black" /></Link>
            }
          </div>
        </header>
      )}
      {
        loading ?
          (
            <div className="h-[100vh] flex justify-center items-center">
              <div className="w-30 h-30 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
            </div>
          ) : (
            <>
              <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                  <Route path='/' element={<HomePage loggedUser={loggedUser} />} />
                  <Route path='/direct' element={<Direct conversations={conversations} setConversations={setConversations} />} />
                  <Route path='/reels' element={<Reels />} />
                  <Route path='/search' element={<Search />} />
                  <Route path='/profile' element={<Profile loggedUser={loggedUser} />} />
                  <Route path='/conversation/:id' element={<SingleConversation conversations={conversations} setConversations={setConversations} />} />
                  <Route path='/notifications' element={<NotificationsSection loggedUser={loggedUser} />} />
                  <Route path='/follow' element={<Follow />} />
                </Routes>
              </AnimatePresence>
            </>
          )
      }

      {location.pathname.startsWith("/conversation") ? (
        <InputMessage conversations={conversations} setConversations={setConversations} conversationId={conversationId} />
      ) : showYBanners && (
        <Navigation conversations={conversations} setLoading={setLoading} />
      )
      }
    </div>
  )
}

export default App
