import { Avatar } from "./BlogCard"

export const Appbar = () => {
    return <div className="border-b
    flex justify-between px-10 py-4">
        <div className="font-bold flex justify-center">Medium</div>

        <div className="">
            <Avatar name="Karan" size={8} />

        </div>
    </div>
}