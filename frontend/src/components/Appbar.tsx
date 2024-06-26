import { Avatar } from "./BlogCard"
import { Link } from "react-router-dom"
export const Appbar = () => {
    return <div className="border-b
    flex justify-between px-10 py-4 cursor-pointer">
        <Link to={'/'}>
            <div className="font-bold flex justify-center">Medium</div>
        </Link>

        <div className="">
            {localStorage.getItem('token') && <Link to={'/'}>
                <button type="button" onClick={() => localStorage.removeItem('token')} className=" mr-4 focus:outline-none text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Log Out</button>
            </Link>}
            <Link to={'/publish'}>
                <button type="button" className=" mr-4 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Pulblish</button>
            </Link>
            <Avatar name="Karan" />

        </div>
    </div>
}