import { useState, useMemo } from 'react';
import { SlMagnifier } from "react-icons/sl";

function Search() {
    const [query, setQuery] = useState("");
    const [arrayCount, setArrayCount] = useState(50)

    const handleTypingQuery = (e) => {
        const typedQuery = e.target.value
        setQuery(typedQuery)

        if (typedQuery.length > 0){
          setArrayCount(200);  
        }
        else {
          setArrayCount(50);
        }
    }

    const categories = [
        'Natura', 'Tecnologia', 'Persone', 'Animali', 'Architettura', 
        'Viaggi', 'Cibo', 'Arte', 'Moda', 'Musica', 
        'Sport', 'Cinema', 'Motori', 'Design', 'Storia'
    ];

    const categoryKeywords = {
        'Natura': 'nature',
        'Tecnologia': 'technology',
        'Persone': 'people',
        'Animali': 'animals',
        'Architettura': 'architecture',
        'Viaggi': 'travel',
        'Cibo': 'food',
        'Arte': 'art',
        'Moda': 'fashion',
        'Musica': 'music',
        'Sport': 'sports',
        'Cinema': 'cinema',
        'Motori': 'cars',
        'Design': 'design',
        'Storia': 'history'
    };

    const explorePosts = useMemo(() => Array.from({ length: arrayCount }, (_, i) => {
        const category = categories[i % categories.length];
        const keyword = categoryKeywords[category];
        return {
            id: i,
            imageUrl: `https://loremflickr.com/400/600/${keyword}?lock=${i}`,
            likes: (i * 123 + 50) % 1000 + 50, // Pseudo-random deterministico
            comments: (i * 45 + 10) % 100 + 5, // Pseudo-random deterministico
            category: category
        };
    }), [arrayCount]);

    const filteredPosts = explorePosts.filter(post => 
        post.category.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="pb-1 min-h-[100vh]"> {/* Padding bottom per la navbar */}
            <div className="sticky top-0 bg-gray-200 z-10 px-4 py-2 flex gap-2">
                <div className="bg-gray-200 rounded-full border-1 border-gray-400 text-left p-2 px-4 flex gap-3 items-center flex-1">
                    <SlMagnifier color="000B2D" size={20} />
                    <input
                        value={query}
                        onChange={handleTypingQuery}
                        type="text"
                        placeholder="Cerca"
                        className="outline-none border-none bg-transparent w-full placeholder-gray-500 text-black"
                    />
                </div>
                <button>
                    <i className="fa-solid fa-ellipsis text-[1.2rem] text-gray-600"></i>
                </button>
            </div>

            <div className="grid grid-cols-3 mt-1 gap-[1px]">
                {filteredPosts.map((post) => (
                    <div key={post.id} className="relative cursor-pointer hover:opacity-90 transition-opacity group">
                        <img
                            src={post.imageUrl}
                            alt={`Post esplora ${post.id}`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-40 transition-all duration-200 flex flex-col items-center justify-center gap-1 opacity-0 hover:opacity-90 text-[1.3rem]">
                            <span className="text-white font-semibold flex items-center gap-1">
                                <i className="fa-solid fa-heart" /> {post.likes}
                            </span>
                            <span className="text-white font-semibold flex items-center gap-1">
                                <i className="fa-solid fa-comment" /> {post.comments}
                            </span>

                        </div>
                    </div>

                ))}
            </div>
        </div>
    );
}

export default Search;
