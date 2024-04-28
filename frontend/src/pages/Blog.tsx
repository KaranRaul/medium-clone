
import { useParams } from 'react-router-dom';
import { useBlog } from '../hooks';
import { FullBlogs } from '../components/FullBlogs';
import { FullBlogSkeleton } from '../components/BlogSkeleton';
import { Appbar } from '../components/Appbar';

export const Blog = () => {
    const { id } = useParams();
    const { loading, blog } = useBlog({
        id: id || ""
    });
    // console.log(blog.title)
    if (loading || !blog) return <div>
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
