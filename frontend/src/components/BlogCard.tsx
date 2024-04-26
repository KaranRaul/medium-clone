interface BlogCardProps {
    authorName: string,
    title: string,
    content: string,
    publishedDate: string
}

export const BlogCard = ({
    authorName,
    title,
    content,
    publishedDate
}: BlogCardProps) => {
    return (
        <div>
            <div className="flex">
                <div className="flex justify-center flex-col">
                    <Avatar name={authorName} />
                </div>
                {/* <div>{authorName} . {publishedDate}</div> */}
                <div className="font-extralight pl-2">
                    {authorName}
                </div>
                <div className="text-xs">
                    &#9679;
                </div>
                <div className="pl-2 font-thin text-slate-400">
                    {publishedDate}
                </div>
            </div>
            <circle />
            <div>{title}</div>
            {content.slice(0, 100) + "..."}
//
            <div>
                {`${Math.ceil(content.length / 100)} minutes`}
            </div>
            {/* </div> */}

            <div className="bg-slate-200 h-1 w-full"> </div>
        </div >

    )
}

function circle() {
    return <div className="h-1 w-1 rounded-full">
        .
    </div>
}

function Avatar({ name }: { name: string }) {
    return <div className="relative inline-flex items-center justify-center w-5 h4 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
        <span className="font-sm  text-gray-600 dark:text-gray-300">{name[0]}</span>
    </div>
}