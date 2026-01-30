import { Link, NavLink } from "react-router-dom";

//icons
import { IoHomeSharp } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { BsSendFill } from "react-icons/bs";
import { BsSend } from "react-icons/bs";
import { GoVideo } from "react-icons/go";
import { PiVideoFill } from "react-icons/pi";
import { SlMagnifier } from "react-icons/sl";
import { FaMagnifyingGlass } from "react-icons/fa6";


function Navigation({ setLoading }) {

    const handleToHome = () => {
        setLoading(true)
        setTimeout(() => {
            window.scrollTo(0, 0)
            setLoading(false)
        }, 1000);
    }

    return (
        <nav className="h-[60px] bg-gray-200 border-1 border-gray-300 sticky bottom-0 w-[100vw] flex justify-between px-5 pt-2">
            <div>
                <NavLink to="/" onClick={handleToHome} end>
                    {({ isActive }) => (
                        isActive ? (
                            <IoHomeSharp color="000B2D" size={30} />
                        ) : (
                            <IoHomeOutline color="000B2D" size={30} />
                        )
                    )}
                </NavLink>
            </div>
            <div>
                <NavLink to="/reels" onClick={handleToHome} end>
                    {({ isActive }) => (
                        isActive ? (
                            <PiVideoFill color="000B2D" size={30} />
                        ) : (
                            <GoVideo color="000B2D" size={30} />
                        )
                    )}
                </NavLink>
            </div>
            <div>
                <NavLink to="/direct" onClick={handleToHome}>
                    {({ isActive }) => (
                        isActive ? (
                            <BsSendFill color="000B2D" size={30} />
                        ) : (
                            <BsSend color="000B2D" size={30} />
                        )
                    )}
                </NavLink>
            </div>
            <div>
                <NavLink to="/search" onClick={handleToHome}>
                    {({ isActive }) => (
                        isActive ? (
                            <FaMagnifyingGlass color="000B2D" size={30} />
                        ) : (
                            <SlMagnifier color="000B2D" size={30} />
                        )
                    )}
                </NavLink>
            </div>
            <div>
                <NavLink to="/profile" onClick={handleToHome} end>
                    <img className="w-[30px] rounded-full" src="/public/profile.jpg" alt="" />
                </NavLink>
            </div>


        </nav>
    )
}

export default Navigation;