//utils
import { useState } from 'react'
import React from 'react'
//icons
import { MdOutlineMenu } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { CiLock } from "react-icons/ci";
import { FaUserPlus } from "react-icons/fa6";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { GoVideo } from "react-icons/go";
import { BiRepost } from "react-icons/bi";
import { BiUserPin } from "react-icons/bi";
import { TbSquaresFilled } from "react-icons/tb";
import { BsEmojiTear } from "react-icons/bs";

function Profile({loggedUser}) {
    const [profileNavigation, setProfileNavigation] = useState("grid") //grid, reels, repost, tagged
    const navigationElements = [
        { id: "grid", Icon: BsFillGrid3X3GapFill, size: 26, category: "travel" },
        { id: "reels", Icon: GoVideo, size: 30, category: "random" },
        { id: "repost", Icon: BiRepost, size: 35, category: "soccer" },
        { id: "tagged", Icon: BiUserPin, size: 30, category: "tagged" }
    ]

    const { accountName, userName, postsCount, followersCount, followingCount, bio } = loggedUser

    const highlightsArray = [{ text: "Barcelona🇪🇸", category: "beach" }, { text: "Summer25", category: "lifestyle" }, { text: "Marseille🇫🇷", category: "travel" }, { text: "😺", category: "cat" }, { text: "Japan", category: "travel" }]

    const currentCategory = navigationElements.find(el => el.id === profileNavigation)?.category || "random";

    return (
        <div className="min-h-[100vh] max-w-[100vw] text-black p-3">
            <div className="profileHeader flex justify-between items-center ">
                <button><GoPlus size={32} /></button>
                <div className="name flex gap-1 items-center">
                    <span><CiLock size={27} /></span>
                    <span className="text-2xl font-bold">{accountName}</span>
                </div>
                <button><MdOutlineMenu size={32} /></button>
            </div>
            <div className="profileInfo mt-7 flex gap-4">
                <div className="w-[7rem] relative">
                    <img className="rounded-full me-1" src="/public/profile.jpg" alt="" />
                    <div className="absolute bottom-0 right-0 bg-[#000B2D] rounded-full border-4 border-white p-[2px]">
                        <GoPlus size={20} strokeWidth={1.5} color="white" />
                    </div>
                </div>
                <div className="info text-left">
                    <span className="block font-bold">{userName}</span>
                    <div className="flex mt-1 gap-6 leading-none">
                        <span><span className="font-bold">{postsCount}</span> posts</span>
                        <span><span className="font-bold">{followersCount}</span> followers</span>
                        <span><span className="font-bold">{followingCount}</span> following</span>
                    </div>
                </div>
            </div>
            <div className="bio text-left mt-5 text-sm">
                {bio}
            </div>
            <div className="profileButtons flex justify-between mt-4 gap-x-1 text-sm">
                <button className="bg-gray-200 py-[2px] flex-4">Modifica Profilo</button>
                <button className="bg-gray-200 py-[2px] flex-4">Condividi Profilo</button>
                <button className="bg-gray-200 py-[2px] shrink-0 px-2"><FaUserPlus /></button>
            </div>
            <div className="highlights flex flex-nowrap gap-5 mt-4 overflow-hidden me-[-12px]">
                <div className="text-xs flex flex-col items-center">
                    <div className="border-2 p-[2px] w-[55px] border-gray-300 rounded-full shrink-0 pt-[12px] pb-[8px]">
                        <button><GoPlus size={28} /></button>
                    </div>
                    <span className="truncate ...">Nuovo</span>
                </div>

                {highlightsArray ?
                    highlightsArray.map((hl, i) => (
                        <React.Fragment key={i}>
                            <div className="text-xs flex flex-col items-center shrink-0">
                                <img key={i} className="border-3 border-gray-300 p-[2px] w-[55px] rounded-full" src={`https://loremflickr.com/300/300/${hl.category}?lock=${i}`} alt="" />
                                <span className="truncate ...">{hl.text}</span>
                            </div>
                        </React.Fragment>
                    )) : (
                        <div className="text-gray-400 text-[6px] pt-4">
                            <h1>Salve le storie per vederle qui!</h1>
                        </div>
                    )}
            </div>
            <div className="profile_main">
                <nav className="flex justify-between mt-2 border-t border-gray-200">
                    {navigationElements.map((nE) => (
                        <div key={nE.id} className={`flex-1 flex justify-center py-2 ${profileNavigation === nE.id ? 'border-b-2 border-black' : ''}`}>
                            <button onClick={()=>setProfileNavigation(nE.id)}>
                                <nE.Icon size={nE.size} color={profileNavigation === nE.id ? "000B2D" : "gray"} />
                            </button>
                        </div>
                    ))}
                </nav>
                {profileNavigation === "reels" ? (
                    <div className="h-[80vh] text-gray-400 flex flex-col items-center px-10 gap-10 pt-10">
                        <h1>I reels non sono ancora disponibili</h1>
                        <BsEmojiTear size={200} />
                    </div>
                ) : (
                    <div className="grid grid-cols-3 mx-[-13px]">
                        {Array.from({ length: 15 }, (_, i) => (
                            <div className="relative" key={i}>
                                <img className={`block w-full h-full object-cover border-white ${i % 3 === 1 ? "border-x-2" : ""} border-b-2`} src={`https://loremflickr.com/200/300/${currentCategory}?lock=${i}`} alt={i} />
                                {i % 4 === 0 &&
                                    <div className="absolute top-2 right-2">
                                        <TbSquaresFilled size={25} color="white" />
                                    </div>
                                }
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
export default Profile;