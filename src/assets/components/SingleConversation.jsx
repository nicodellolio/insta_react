//hooks
import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react'
//icons
import { FaAngleLeft } from "react-icons/fa6";
import { BsTelephone } from "react-icons/bs";
import { PiVideoCamera } from "react-icons/pi";

// eslint-disable-next-line no-unused-vars
function SingleConversation({ conversations, setConversations }) {
    const { id } = useParams()

    const currentChat = conversations.find((conv) => conv.id === Number(id))

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [id])

    return (
        <div className="relative w-full flex flex-col min-h-[90vh] pb-4 mb-5">
            <div className="user border-b-1 border-gray-200 mb-3 flex gap-2 p-3 items-center">
                <Link className="text-3xl text-black " to="/direct">
                    <FaAngleLeft color="#4c4c4eff" size={30} />
                </Link>
                <img className="rounded-full w-[40px]" src={currentChat.convUserImg} alt="" />
                <h2 className="text-black font-bold text-lg flex-1 text-left">{currentChat.convUser}</h2>
                <div className="pe-2 flex gap-2 items-center">
                    <BsTelephone color="#4c4c4eff" size={25} />
                    <PiVideoCamera color="#4c4c4eff" size={32} />
                </div>
            </div>
            {currentChat && currentChat.messages && currentChat.messages.length > 0 ? (
                currentChat.messages.map((msg, idx) => (
                    <div key={idx} style={{width: "fit-content", maxWidth: "70%"}} className={`text-[14px] ${msg.sender === "me" ? "bg-blue-500 text-white self-end me-2" : "bg-gray-300 text-black ms-2 "} ps-4 pe-3 rounded-full mt-2 py-1 text-left`}>
                        <h3>{msg.text}</h3>
                    </div>
                ))
            ) : (
                <div className="justify-self-center mt-[20%]">
                    <h1 className="text-gray-600 text-4xl!">Non hai messaggi</h1>
                    <h1 className="text-gray-400 text-lg!">Inizia una converazione con {currentChat.convUser}</h1>
                </div>
            )}
        </div>
    )
}
export default SingleConversation;