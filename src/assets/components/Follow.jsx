// eslint-disable-next-line no-unused-vars
import react from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import { useNavigate } from 'react-router-dom'
//icons
import { FaAngleLeft } from "react-icons/fa6";
import UserToFollow from './UserToFollow'


function Follow() {
    const navigate = useNavigate()

    return (
        <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="h-screen text-black py-5 px-3 mt-2 text-left">

            <header className="flex gap-1 mb-8 items-center text-center">
                <button onClick={() => navigate(-1)} className="cursor-pointer flex-1 !bg-transparent">
                    <FaAngleLeft size={30} />
                </button>
                <h1 className="!text-sm font-bold flex-2 text-left">Scopri Persone</h1>
            </header>

            <h4 className="font-bold mb-3">Suggeriti per te</h4>
            {Array.from({ length: 5 }, (_, i) => (
                <UserToFollow key={i} i={i} category="suggested" />
            ))}

            <h4 className="font-bold mb-3">Segui anche tu</h4>
            {Array.from({ length: 11 }, (_, i) => (
                <UserToFollow key={i} i={i + 20} category="folBack" />
            ))}
        </motion.div>
    )
}
export default Follow