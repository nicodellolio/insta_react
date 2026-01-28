import { CiCamera } from "react-icons/ci";
import conversations from '../conversations.js'

function Direct() {

    // const {id, convUser, convUserImg, convPreview, convLastMessageTime, hasStoryActive} = conversations

    return (
        <main className="flex flex-col bg-white py-2 px-4 text-black">
            <h6 className="text-left font-bold text-xl mb-4">Messaggi</h6>

            {conversations.length > 0 ? (
                conversations.map((conv) => (
                    <>
                        <div key={conv.id} className="convo flex gap-4 py-2 cursor-pointer active:bg-gray-100 items-center">
                            <div className={`my-auto ${conv.hasStoryActive ? "rounded-full p-[2px] bg-gradient-to-tr from-yellow-400 via-red-500 to-indigo-500" : ""}`}>
                                <img className={`thumbnail rounded-full w-[60px] min-w-[60px] ${conv.hasStoryActive ? "border-3 border-white" : "me-1"}`} src={conv.convUserImg}
                                    alt={conv.convUser + " profile picture"} />
                            </div>
                            <div className="text-sm text-left overflow-hidden flex-1 min-w-0">
                                <h4 className={`me-2 ${conv.unread && "font-bold"}`}>
                                    {conv.convUser}
                                </h4>
                                <div className="flex items-center text-gray-500">
                                    <p className={`truncate ${conv.unread && "font-bold text-black"}`}>
                                        {conv.convPreview}
                                    </p>
                                    <span className="whitespace-nowrap shrink-0">
                                        &nbsp;· {conv.convLastMessageTime}
                                    </span>
                                </div>
                            </div>
                            {conv.unread &&
                                <div className="w-[7px] h-[7px] mx-2 min-w-[7px] rounded-full bg-blue-600"></div>
                            }
                            <div className="my-auto shrink-0 flex justify-end">
                                <CiCamera size={30} strokeWidth={conv.unread ? 1 : 0} />
                            </div>
                        </div>
                    </>
                ))
            ) : (
                <h1>Non hai messaggi da visualizzare</h1>
            )}


        </main>
    )
}

export default Direct;
