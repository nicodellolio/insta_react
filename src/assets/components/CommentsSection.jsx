import React from 'react'

function CommentsSection({ comments }) {

    return (
        <div className="commentSection mt-3">

            {comments.map(comment => (
                <div key={comment.idComment} className="comment flex gap-3 mb-2">
                    <div className="leftCommentSide my-auto">
                        <img className="thumbnail rounded-full w-[30px] min-w-[30px] me-1" src={comment.comment_Account_Img + comment.idComment} alt={comment.comment_Account} />
                    </div>
                    <div className="middleCommentSide text-sm text-left">
                        <h4 className="font-bold inline me-2">{comment.comment_Account}</h4>
                        <span>{comment.text}</span>
                    </div>
                    <div className="rightCommentSide my-auto flex-1 flex justify-end">
                        <i className="fa-regular text-xs fa-heart" aria-hidden="true"></i>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CommentsSection;