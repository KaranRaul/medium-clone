import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { useBlogs } from "../hooks"

export const Blogs = () => {
    const { loading, blogs } = useBlogs();
    if (loading) {
        return <div>
            Loading...
        </div>
    }
    return <div>
        <Appbar />
        <div className="flex justify-center">

            <div className="max-w-xl">

                {blogs.length > 0 && blogs.map(blog => <BlogCard id={blog.id} key={blog.id} authorName={blog.author.name}
                    publishedDate={blog.publishedDate}
                    title={blog.title}
                    content={blog.content} />

                )}
            </div>
        </div>
    </div>



}