import { useNavigate } from "react-router-dom";
import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks"
import { useEffect } from "react";

export const Blogs = () => {
    const { loading, blogs } = useBlogs();
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem('token'))
            navigate('/')
    }, [])
    if (loading) {
        return <div>
            <Appbar />
            <div className="flex justify-center">
                <div>
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                </div>
            </div>

        </div>
    }
    return <div>
        <Appbar />
        <div className="flex justify-center">

            <div className="max-w-xl">

                {blogs.length > 0 && blogs.map(blog => <BlogCard id={blog.id} key={blog.id} authorName={blog.author.name}
                    publishedDate={"2nd feb 2024"}
                    title={blog.title}
                    content={blog.content} />

                )}
            </div>
        </div>
    </div>



}