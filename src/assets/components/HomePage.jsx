import React from 'react'
import posts from '../posts.js'
import Post from '../components/Post.jsx'

function HomePage({loggedUser}) {
    return (
        <main className="flex flex-col gap-8 bg-white py-2 text-black w-full">
            {
                posts.map(post =>
                    <React.Fragment key={post.id}>
                        <Post loggedUser={loggedUser} content={post} />
                        <hr style={{ color: "#ffffff1e" }} />
                    </React.Fragment>
                )
            }
        </main>
    )
}
export default HomePage;