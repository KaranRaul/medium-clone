import axios from "axios";
import { useEffect, useState } from "react"

import { BACKEND_URL } from "../config";

export interface Blog {
    "title": string;
    "content": string;
    "id": string;
    "author": {
        "name": string;
    };
}


export const useBlog = ({ id }: { id: any }) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();

    useEffect(() => {
        // console.log(localStorage.getItem('token')?.toString());
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
            headers: {
                "Authorization": localStorage.getItem('token')
            }

        })
            .then(response => {
                // console.log(response.data)
                setBlog(response.data);
                setLoading(false);
            });
    }, [id]);

    return {
        loading, blog
    }
}

export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);


    useEffect(() => {
        // console.log(localStorage.getItem('token')?.toString());
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
                "Authorization": localStorage.getItem('token')
            }

        })
            .then(response => {
                console.log(response.data)
                setBlogs(response.data);
                setLoading(false);
            });
    }, []);

    return {
        loading, blogs
    }
}

