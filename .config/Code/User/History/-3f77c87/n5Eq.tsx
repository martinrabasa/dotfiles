import Dialoga from "./Dialog"
import { Comment } from "../types/Comment";
import { User } from "firebase/auth";
import { useState } from 'react'
import { Dialog } from '@headlessui/react'

type CommentProps = {
    comment: Comment,
    user: User,
    isAdmin: boolean,
    likeComment: (comment: Comment) => {},
    deleteComment: (id: string) => {}
}

const CommentComponent = ({ comment, user, isAdmin, deleteComment, likeComment }: CommentProps) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='flex flex-col gap-4 mt-8 group' key={comment.id}>
            <div className="flex justify-between items-center">
                <div>
                    <span className='font-bold'>{comment.author}</span>
                    <span> · {new Date(comment.publishDate).toLocaleString("es-AR", {dateStyle: 'long', timeStyle: 'short'})}</span>
                </div>
                {(comment.userId === user?.uid || isAdmin) &&
                    <button className="hidden justify-self-end group-hover:block" onClick={() => deleteComment(comment.id)} >
                        <svg className="h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                        </svg>
                    </button>}
            </div>
            <p>{comment.comment}</p>

            <button className="self-start text-sm flex items-center gap-2" onClick={() => user ? likeComment(comment) : setIsOpen(true)}>
                <svg className="h-6" xmlns="http://www.w3.org/2000/svg" fill={ comment.likes.includes(user?.uid) ? "currentColor" : "none" } viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
                <span>{comment.likes.length}</span>
            </button>

            <Dialog
                open={isOpen}
                onClose={() => setIsOpen(false)}
                className="relative z-50">
                {/* The backdrop, rendered as a fixed sibling to the panel container */}
                <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

                {/* Full-screen container to center the panel */}
                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <Dialog.Panel className="mx-auto max-w-sm rounded bg-white">
                        <Dialoga />
                    </Dialog.Panel>
                </div>
            </Dialog>
                        
            {/* <Dialog.Root>
                <Dialog.Trigger>
                    <button className="self-start text-sm flex items-center gap-2" onClick={() => user ? likeComment(comment) : ""}>
                        <svg className="h-6" xmlns="http://www.w3.org/2000/svg" fill={ comment.likes.includes(user?.uid) ? "currentColor" : "none" } viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                        <span>{comment.likes.length}</span>
                    </button>
                </Dialog.Trigger>
                <Dialog.Overlay className="overflow-scroll inset-0 fixed bg-black opacity-30" />
                <Dialog.Content className="">
                    <div className="w-full fixed inset-0 flex items-center justify-center p-4">
                        <div className="mx-auto rounded-2xl bg-white p-16 z-20">
                            <Dialoga />
                        </div>
                    </div>
                </Dialog.Content>
            </Dialog.Root> */}
        </div>
    )
}

export default CommentComponent;