import React from 'react'
import { Blog } from '../hooks'
import { Appbar } from './Appbar'
// import Blog from '../hooks/index'

export const FullBlogs = ({ blog }: { blog: Blog }) => {
    return (
        <div >
            <Appbar />
            <div className="flex justify-center">
                <div className='grid grid-cols-12 px-10 w-full  pt-200'>
                    <div className='col-span-8 bg-red-200'>
                        <div className='text-3xl font-extrabold'>
                            {blog.title}
                        </div>
                        <div>
                            Post On
                        </div>
                        <div className=''>
                            {blog.content}
                        </div>
                    </div>
                    <div className='col-span-4 bg-green-200'>
                        hello
                    </div>

                </div>

            </div>
        </div>
    )
}

