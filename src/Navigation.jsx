import { Link, NavLink } from "react-router-dom";

//icons
import { IoHomeSharp } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { BsSendFill } from "react-icons/bs";
import { BsSend } from "react-icons/bs";



function Navigation({ setLoading }) {

    const handleToHome = () => {
        setLoading(true)
        setTimeout(() => {
            window.scrollTo(0, 0)
            setLoading(false)
        }, 1000);
    }

    return (
        <nav className="h-[50px] bg-gray-200 border-1 border-gray-300 sticky bottom-0 w-[35vw] flex justify-evenly pt-2">
            <div>
                <NavLink to="/" onClick={handleToHome}>
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


        </nav>
    )
}

export default Navigation;