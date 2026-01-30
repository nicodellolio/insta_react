//utils
// import React from 'react'
import { useState, useEffect, useRef } from 'react';
import CommentsSection from './CommentsSection.jsx'
import { commentsData } from '../commentsData.js'

//icons
import { FaArrowAltCircleUp } from "react-icons/fa";

// eslint-disable-next-line no-unused-vars
import { uniqueNamesGenerator, adjectives, colors, animals, names } from 'unique-names-generator'


function Post({ content }) {
    const {
        id,
        accountName,
        verified,
        thumbnailSrc,
        postImgSrc,
        likesCount_HC,
        caption,
        captionTranslated,
        tags,
        langDetected,
        timeAgoPosted
    } = content;

    const [translated, setTranslated] = useState(false)
    const [commentsOpen, setCommentsOpen] = useState(false)
    const [postComment, setPostComment] = useState(false)
    const [isLiked, setIsLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(likesCount_HC);
    const [isSaved, setIsSaved] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [hasText, setHasText] = useState(false)

    //sezione nuovo commento  
    const inputRef = useRef(null)
    useEffect(() => {
        if (postComment && inputRef.current) {
            inputRef.current.focus();
        }
    }, [postComment]);
    const [isInputFocused, setIsInputFocused] = useState(false);

    const initialComments = commentsData.find(c => c.postID === id)?.comments || [];
    const [comments, setComments] = useState(initialComments);
    //ordininiam in ordine descrescente di id
    const commentsSortedByIdDesc = [...comments].sort((a, b) => b.id - a.id);

    const shortName = uniqueNamesGenerator({
        dictionaries: [names, adjectives, colors], // colors can be omitted here as not used
        length: 2
    });

    const lastIdComment = comments[comments.length - 1].idComment

    function handlePostComment() {
        const text = inputRef.current.value;
        if (!text) return;

        const newCommentObj = {
            idComment: lastIdComment + 1,
            text: text,
            comment_Account: shortName, // TODO: Sostituire con l'account loggato
            comment_Account_Img: "https://picsum.photos/",
            time: "Adesso"
        };

        setComments([...comments, newCommentObj]);
        inputRef.current.value = "";
        inputRef.current.focus();
        setIsInputFocused(true)
        setHasText(false);
    }

    function toggleLike() {
        if (isLiked) {
            setIsLiked(false);
            setLikesCount(likesCount - 1);
        } else {
            setIsLiked(true);
            setLikesCount(likesCount + 1);
        }
    }

    function toggleSave() {
        setIsSaved(!isSaved);
    }

    const nextSlide = () => {
        if (currentSlide < postImgSrc.length - 1) {
            setCurrentSlide((prev) => prev + 1);
        }
    };

    const prevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide((prev) => prev - 1);
        }
    };

    function toggleComments() {
        setCommentsOpen(!commentsOpen)
    }

    function toggleTranslation() {
        setTranslated(!translated)
    }

    function togglePostComment() {
        setCommentsOpen(!commentsOpen)
        setPostComment(!postComment)
    }

    return (

        <>
            <div className="instaPost w-[100vw] text-left px-4">
                <div className="cardHeader mb-3 px-2">
                    <div className="header flex gap-2 items-center justify-between">
                        <div className="nameBox flex items-center gap-1">
                            <img src={thumbnailSrc} alt="" className="thumbnail rounded-full w-[32px] me-1" />
                            <h3 className="font-bold">{accountName}</h3>
                            {verified &&
                                <img className="w-[15px] h-[15px]" src='verified.png' alt="" />
                            }
                            <span>• {timeAgoPosted}</span>

                        </div>
                        <button>
                            <i className="fa-solid fa-ellipsis"></i>
                        </button>
                    </div>
                </div>

                <div id="default-carousel" className="relative w-full" data-carousel="slide">
                    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                        {postImgSrc.map((postImgSrcSingle, i) => (
                            <div key={i} className={`${i === currentSlide ? "block" : "hidden"} h-full duration-700 ease-in-out`} data-carousel-item>
                                <img src={postImgSrcSingle} className="object-cover h-full block w-full" alt={accountName} />
                            </div>
                        ))}
                    </div>

                    {postImgSrc.length > 1 && (
                        <>
                            <button
                                type="button"
                                className={`absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none disabled:cursor-not-allowed disabled:opacity-50`}
                                onClick={prevSlide}
                                disabled={currentSlide === 0}
                            >
                                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                    <svg className="w-5 h-5 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7" /></svg>
                                    <span className="sr-only">Previous</span>
                                </span>
                            </button>
                            <button
                                type="button"
                                className={`absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none disabled:cursor-not-allowed disabled:opacity-50`}
                                onClick={nextSlide}
                                disabled={currentSlide === postImgSrc.length - 1}
                            >
                                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                    <svg className="w-5 h-5 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" /></svg>
                                    <span className="sr-only">Next</span>
                                </span>
                            </button>
                        </>
                    )}
                </div>
                {postImgSrc.length > 1 && (
                    <div className="mt-2 flex justify-center space-x-3 rtl:space-x-reverse">
                        {postImgSrc.map((_, i) => (
                            <button
                                key={i}
                                type="button"
                                className={`w-3 h-3 rounded-full ${i === currentSlide ? "bg-blue-500" : "bg-blue-500/30"}`}
                                aria-current={i === currentSlide}
                                aria-label={`Slide ${i + 1}`}
                                onClick={() => setCurrentSlide(i)}
                            ></button>
                        ))}
                    </div>
                )}
                <div className="cardFooter flex justify-between">

                    <div className="footerLeftSide flex py-3 text-center gap-3 items-center">
                        <div className="likes">
                            <button
                                className="flex items-center gap-[3px]"
                                onClick={toggleLike}
                            >
                                {isLiked
                                    ? <i className="fa-solid fa-heart text-2xl" style={{ color: "#f53041" }}></i>
                                    : <i className="fa-regular fa-heart text-2xl" aria-hidden="true"></i>
                                }
                                <span className="font-bold">{likesCount_HC}</span>
                            </button>

                        </div>
                        <div className="comments group">
                            <button onClick={togglePostComment} className="flex items-center gap-[3px]">
                                <i className="fa-regular group-hover:!hidden fa-comment text-2xl" aria-hidden="true"></i>
                                <i className="fa-solid !hidden group-hover:!inline-block fa-comment text-2xl" aria-hidden="true"></i>
                                <span className="font-bold">{comments.length}</span>
                            </button>
                        </div>

                        <div className="forward group">
                            <button className="flex items-center gap-[3px]">
                                <i className="fa-regular group-hover:!hidden fa-paper-plane rotate-20 text-[1.30rem]" aria-hidden="true"></i>
                                <i className="fa-solid !hidden group-hover:!inline-block fa-paper-plane rotate-20 text-[1.30rem]" aria-hidden="true"></i>
                            </button>
                        </div>

                    </div>

                    <div className="footerRightSide py-3 text-center">
                        <div className="save">
                            <button
                                onClick={toggleSave}>
                                {isSaved
                                    ? <i className="fa-solid fa-bookmark text-2xl pt-1"></i>
                                    : <i className="fa-regular fa-bookmark text-2xl pt-1" aria-hidden="true"></i>
                                }
                            </button>
                        </div>
                    </div>
                </div>
                <div className="caption mb-1">
                    <div className="nameBox text-left">
                        <h3 className="font-bold inline">{accountName}</h3>
                        {verified &&
                            <img className="inline w-[15px] h-[15px]" src='verified.png' alt="" />
                        }
                        <article className="ps-2 inline">{translated ? captionTranslated : caption}</article>
                        <div className="tags flex gap-2">
                            {tags.map((tag, i) =>
                                <a key={i} href={tag}>{tag}</a>
                            )}
                        </div>
                    </div>
                </div>

                {langDetected !== "it" &&
                    <button className="block" onClick={toggleTranslation}>
                        <span className="text-sm font-bold mb-2">
                            {translated ? "Vedi orginale" : "Vedi traduzione"}
                        </span>
                    </button>
                }

                <button onClick={toggleComments}>
                    <span className="text-xs">{commentsOpen ? "Nascondi commenti" : "Visualizza tutti i commenti"}</span>
                </button>

                {//sezione post comment
                    postComment &&
                    <div className="comment flex gap-3 my-2 items-center">
                        <div className="leftCommentSide my-auto">
                            <img className="thumbnail rounded-full w-[30px] min-w-[30px] me-1" src={`https://picsum.photos/${lastIdComment + 1}`} alt="" />
                        </div>
                        <div className="middleCommentSide flex flex-1 text-sm text-left">
                            <h4 className="font-bold inline me-2 mt-[3px]">{shortName}</h4>
                            <input onChange={(e) => setHasText(e.target.value.trim().length > 0)} ref={inputRef} onFocus={() => setIsInputFocused(true)} placeholder="Scrivi qualcosa..." className="border-gray-300 py-[2px] border-1 px-1 self-start flex-1 rounded-full border-solid mb-2" type="text" />
                        </div>
                        <div className="rightCommentSide flex justify-end text-xs">
                            {
                                isInputFocused && hasText &&
                                <button
                                    className="bg-transparent text-blue-500 font-bold mb-2 hover:text-blue-700"
                                    onMouseDown={(e) => e.preventDefault()}
                                    onClick={handlePostComment}
                                >
                                    <FaArrowAltCircleUp size={23}/>
                                </button>
                            }
                        </div>
                    </div>}

                {commentsOpen &&
                    //trasformare il commmento in un componente separato ed immportato
                    <CommentsSection comments={commentsSortedByIdDesc} />
                }
            </div >
        </>
    )
}

export default Post;