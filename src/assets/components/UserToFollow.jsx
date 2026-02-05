// eslint-disable-next-line no-unused-vars
import react from 'react'
import { useState } from 'react'
import {
    uniqueNamesGenerator,
    names,
} from "unique-names-generator";

function UserToFollow({ i, category }) {
    const [followed, setFollowed] = useState(false)

    const generateName = () => {
        const shortName = uniqueNamesGenerator({
            dictionaries: [names, names],
            length: 2,
            separator: ' '
        });
        return shortName;
    };

    const [name] = useState(generateName)

    return (
        <div>
            <div className="userToFollow text-black flex gap-2 p-2 items-center relative">
                <img className="thumbnail rounded-full min-w-[40px] w-[60px] shrink-0" src={`https://randomuser.me/api/portraits/women/${i}.jpg`} alt={`user ${i} profile picture`} />
                <div className="flex flex-col justify-center">
                    <div className="name flex gap-1">
                        <span className="text-sm font-bold">{name}</span>
                        {i % 3 == 0 &&
                            <img className="w-[15px] h-[15px]" src='verified.png' alt="" />
                        }
                    </div>
                    <span className="text-xs text-gray-500">Suggerito per te</span>
                </div>
                <button onClick={() => setFollowed(prev => !prev)} className={`follow absolute right-3  py-1 px-3 justify-self-end ${followed ? "!bg-gray-400" : "!bg-blue-500"}`}>
                    {!followed ? (
                        <span className="text-white font-semibold !text-sm">{category == "folBack" ? "Segui anche tu" : "Segui"}</span>
                    ) : (
                        <span className="text-white font-semibold !text-sm">Non seguire più</span>
                    )}
                </button>
            </div>
        </div>
    )
}
export default UserToFollow;