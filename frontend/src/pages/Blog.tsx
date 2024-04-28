import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import { useBlog } from '../hooks';
import { FullBlogs } from '../components/FullBlogs';
import { BlogSkeleton, FullBlogSkeleton } from '../components/BlogSkeleton';
import { Appbar } from '../components/Appbar';

export const Blog = () => {
    const id = useParams();
    const { loading, blog } = useBlog(id);
    // console.log(blog.title)
    if (loading) return <div>
        <Appbar />
        <FullBlogSkeleton />
    </div>

    return (
        <div>
            <FullBlogs blog={blog} />


        </div>
    )
}

// export default Blog
