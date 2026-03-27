import { X, SendHorizonal, User } from 'lucide-react'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { dummyCommentsData } from '../assets/assets'

const CommentSection = ({setShowComment}) => {

    const [comment, setComment] = useState('')

    const comments = dummyCommentsData

    const addComment = async () => {
    toast.success("Comment added successfully");
  }

  return (
    <div className='fixed py-40 top-0 bottom-0 left-0 right-0 z-110 h-screen overflow-y-scroll bg-black/50 '>
        <div className='max-w-2xl sm:py-6 mx-auto'>

          <div className='relative bg-white rounded-lg shadow p-6 h-[60vh] overflow-y-auto'>

            <h1 className='text-2xl font-bold text-gray-900 mb-6'>Comments</h1> 
            <X onClick={()=>setShowComment(false)} className='absolute top-4 right-4 w-6 h-6 text-gray-500 cursor-pointer' />

            <div>
                <div className='flex flex-col items-start gap-1 mb-4'>
                    {
                        comments.map((comment, index)=>{
                            return (
                                <div key={index} className='flex items-center gap-1 mb-3'>  
                                    <img src={comment.user.profile_picture} className='w-8 h-8 rounded-full' alt="" />
                                    <div className='gap-1 px-2'>
                                        <p className='text-sm text-gray-500'>@{comment.user.username}</p>
                                        <p className='text-sm '>{comment.comment}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

          </div>

        </div>

        <div className='px-4'>
          <div className='flex items-center gap-3 pl-5 p-1.5 bg-white w-full max-w-xl mx-auto border border-gray-200 shadow rounded-full mb-5'>
            <input type="text" className='flex-1 outline-none text-slate-700' placeholder='Comments...' onKeyDown={e=>e.key === 'Enter' && addComment()} onChange={(e)=> setComment(e.target.value)} value={comment}/>

            <button onClick={addComment} className='bg-linear-to-br from-indigo-500 to bg-purple-600 hover:from-indigo-700 hover:to-purple-800 active:scale-95 cursor-pointer text-white p-2 rounded-full'>
              <SendHorizonal size={18} />
            </button>

          </div>
      </div>

    </div>
  )
}

export default CommentSection