//hooks
import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react'
//utils


// eslint-disable-next-line no-unused-vars
function SingleConversation({conversations, setConversations}) {
    const { id } = useParams()
    
    const currentChat = conversations.find((conv) => conv.id === Number(id))
    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [id])

    return (
        <div className="flex flex-col min-h-[100vh] pb-4 ">
            <div className="user bg-gray-100 flex gap-2 p-3 items-center">
                <Link className="text-3xl text-black " to="/direct">{"<"}</Link>
                <img className="rounded-full w-[40px]" src={currentChat.convUserImg} alt="" />
                <h2 className="text-black font-bold text-lg">{currentChat.convUser}</h2>
            </div>
            {currentChat && currentChat.messages && currentChat.messages.length > 0 ? (
                currentChat.messages.map((msg, idx) => (
                    <div key={idx} className={`text-sm ${msg.sender === "me" ? "bg-blue-500 text-white self-end me-2" : "bg-gray-300 text-black ms-2"} w-50 rounded-full mt-2 px-4 py-1 text-left`}>
                        <h3>{msg.text}</h3>
                    </div>
                ))
            ) : (
                <h1>Non hai messaggi</h1>
            )}

        </div>
    )
}
export default SingleConversation;