import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
//icons
import { FaAngleLeft } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa6";
//utils
import getNotifications from '../notificationsList.jsx'

function NotificationsSection({ loggedUser }) {

    const [notifications] = useState(getNotifications)
    const navigate = useNavigate();

    const sections = [
        {
            title: "Highlights",
            filter: (n) => n.timeStamp.endsWith("m") || n.timeStamp.endsWith("h")
        },
        {
            title: "Ieri",
            filter: (n) => n.timeStamp === "1g"
        },
        {
            title: "Ultimi 7 giorni",
            filter: (n) => n.timeStamp.endsWith("g") && n.timeStamp !== "1g"
        }
    ];

    return (
        <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="notifications bg-gray-100 p-4 pb-10 min-h-screen text-black"
        >
            <header className="flex gap-1 mb-8">
                <button onClick={() => navigate(-1)} className="cursor-pointer">
                    <FaAngleLeft size={30} />
                </button>
                <h1 className="!text-[28px] font-bold">{loggedUser.accountName}</h1>
            </header>

            <Link to='/follow'>
                <div className="followRequests text-left flex text-xs ps-3 leading-tight gap-3 mb-4 text-black">
                    <FaUserPlus size={28} color="black" />
                    <div>
                        <h4 className="font-bold">Richieste di follow</h4>
                        <span className="text-gray-400">Approva o rifiuta richieste di follow</span>
                    </div>
                </div>
            </Link>

            <div className="flex flex-col gap-y-3">
                {sections.map((section, index) => {
                    const sectionNotifications = notifications.filter(section.filter);

                    if (sectionNotifications.length === 0) return null;

                    return (
                        <div key={index} className="text-left flex flex-col gap-y-2">
                            <h4 className="font-bold">{section.title}</h4>
                            {sectionNotifications.map((not, i) => (
                                <div key={i} className="flex items-center gap-x-3 mb-3">
                                    <div className="images flex-1 relative min-w-[55px]">
                                        <img className={`${not.picturesDisplayed == 2 ? "size-[40px]" : "size-[52px]"} rounded-full border-1 border-white shrink-0`} src={"https://picsum.photos/" + i} alt="" />
                                        {not.picturesDisplayed == 2 && (
                                            <img className="size-[40px] rounded-full border-1 border-white absolute top-3 right-2" src={"https://picsum.photos/" + i + 99} alt="" />
                                        )}
                                        {not.isLike && (
                                            <div className="absolute right-0 top-8 bg-[#EB2237] text-center max-w-[26px] border-1 px-1 border-white rounded-full text-white">
                                                ♥
                                            </div>
                                        )}
                                    </div>
                                    <div className="text flex-5 leading-none">
                                        <p className="text-xs inline">{not.text}</p>
                                        <span className="text-gray-400 text-xs ms-1">{not.timeStamp}</span>
                                    </div>
                                    <div className="postImage">
                                        <img className="size-[52px] rounded-md border-1 border-white shrink-0" src={"https://picsum.photos/" + i + 49} alt="" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    );
                })}
            </div>
        </motion.div>
    )
}
export default NotificationsSection;