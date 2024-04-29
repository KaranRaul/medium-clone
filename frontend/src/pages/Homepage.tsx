
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
    const navigate = useNavigate();
    function navigateBlogs() {
        if (localStorage.getItem('token')) {
            navigate('/blogs');
        }
    }

    useEffect(() => {
        navigateBlogs();
    })
    return (
        <div className='h-screen flex justify-center items-center'>
            <div>
                <button type="button" onClick={() => navigate('/signup')} className="min-w-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Sign Up</button>
                <button type="button" onClick={() => navigate('/signin')} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Sign In</button>
            </div>
        </div>
    );
};

export default Homepage;
