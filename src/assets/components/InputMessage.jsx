//hooks
import { useState } from 'react'
//icons
import { FaCamera } from "react-icons/fa";
import { FaArrowAltCircleUp } from "react-icons/fa";

function InputMessage({ conversationId, setConversations, conversations }) {
    const [value, setValue] = useState("")

    const handleSendMessage = () => {
        const input = value
        const conversationMessages = conversations.find(c => c.id == conversationId).messages
        const newMessage = {
            idMessage: conversationMessages.length + 1,
            sender: "me",
            text: input,
            time: "22:34"
        }
        
        setConversations(prevConversations => {
            return prevConversations.map(conv => {
                if (conv.id == conversationId) {
                    return {
                        ...conv, messages: [...conv.messages, newMessage]
                    };
                }
                return conv
            })
        })

        setValue("")

        console.log(conversationMessages);
    }

    return (
        <div className="sticky bottom-2 text-left w-90 mx-auto bg-gray-200 text-black rounded-full p-3 ps-13">
            <div className="camera absolute left-1 bottom-[5px] bg-purple-500 p-[8px] rounded-full">
                <FaCamera size={22} color="white" />
            </div>
            <input value={value} onChange={(e) => setValue(e.target.value)} className="border-none outline-none w-full" type="text" name="sendMessage" placeholder="Scrivi un messaggio all'utente" />
            {value.length > 0 &&
                <button onClick={handleSendMessage} className="!bg-transparent absolute right-2 bottom-[8px]"><FaArrowAltCircleUp size={30} color="#AD46FF" /></button>
            }
        </div>
    )
}
export default InputMessage;