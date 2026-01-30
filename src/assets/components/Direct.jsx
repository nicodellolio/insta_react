//utils
import { useState } from 'react'
import { Link, NavLink } from "react-router-dom";

//icons
import { CiCamera } from "react-icons/ci";
import { SlMagnifier } from "react-icons/sl";

function Direct({ conversations, setConversations }) {

    const handleClickConvo = (id) => {
        const updatedConversations = conversations.map(conv => {
            if (conv.id === id) {
                return { ...conv, unread: false };
            }
            return conv;
        });

        setConversations(updatedConversations);
    }


    const [query, setQuery] = useState("")

    return (
        <main className="flex flex-col bg-white py-2 px-4 text-black min-h-[100vh] w-[100vw]">
            <div className="bg-gray-200 rounded-full text-left p-2 px-4 mb-5 flex gap-3 items-center">
                <SlMagnifier color="000B2D" size={20} />
                <input value={query} onChange={(e) => {
                    setQuery(e.target.value);
                }} type="text" name="search" placeholder="Cerca tra i messaggi..." className="outline-none border-none bg-transparent w-full" />
            </div>

            <h6 className="text-left font-bold text-xl mb-4">Messaggi</h6>

            {conversations.length > 0 ? (

                conversations
                    .filter((conv) => conv.convUser.toLowerCase().includes(query.toLowerCase()))
                    .map(({ id, convUser, convUserImg, hasStoryActive, unread, messages, convLastMessageTime }) => (
                        <Link to={`/conversation/${id}`} key={id}>
                            <div onClick={() => handleClickConvo(id)} className="convo flex gap-2 py-2 cursor-pointer active:bg-gray-100 items-center">

                                <div className={`my-auto ${hasStoryActive ? "rounded-full p-[2px] bg-gradient-to-tr from-yellow-400 via-red-500 to-indigo-500" : ""}`}>
                                    <img className={`thumbnail rounded-full min-w-[40px] w-[50px] ${hasStoryActive ? "border-3 border-white" : "me-1"}`} src={convUserImg}
                                        alt={convUser + " profile picture"} />
                                </div>
                                <div className="text-sm text-left overflow-hidden flex-1 min-w-0">
                                    <h4 className={`me-2 text-black ${unread && "font-bold"}`}>
                                        {convUser}
                                    </h4>
                                    <div className="flex items-center text-gray-500">
                                        <p className={`truncate text-xs ${unread && "font-bold text-black"}`}>
                                            {messages[messages.length - 1].sender === "me" && "Tu: "}
                                            {messages[messages.length - 1].text}
                                        </p>
                                        <span className="whitespace-nowrap shrink-0">
                                            &nbsp;· {convLastMessageTime}
                                        </span>
                                    </div>
                                </div>
                                {unread &&
                                    <div className="w-[7px] h-[7px] mx-2 min-w-[7px] rounded-full bg-blue-600"></div>
                                }
                                <div className="my-auto shrink-0 flex justify-end">
                                    <CiCamera color="black" size={30} strokeWidth={unread ? 1 : 0} />
                                </div>
                            </div>
                        </Link>
                    ))
            ) : (
                <h1>Non hai messaggi da visualizzare</h1>
            )
            }


        </main >
    )
}

export default Direct;
