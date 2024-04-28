// export const BlogSkeleton = () => {
//     return <div role="status" className="max-w-xl animate-pulse">
//         <div className="flex items-center mb-4">
//             <div className="h-8 w-8 bg-gray-200 rounded-full mr-2"></div>
//             <div className="h-2.5 w-32 bg-gray-200 rounded-full"></div>
//         </div>
//         <div className="h-2 bg-gray-200 rounded-full mb-2.5 max-w-[360px]"></div>
//         <div className="h-2 bg-gray-200 rounded-full mb-2.5 max-w-[330px]"></div>
//         <div className="h-2 bg-gray-200 rounded-full mb-2.5 max-w-[300px]"></div>
//         <div className="h-2 bg-gray-200 rounded-full mb-2.5 max-w-[360px]"></div>
//         <div className="h-2 bg-gray-200 rounded-full max-w-[240px]"></div>
//         <span className="sr-only">Loading...</span>
//     </div>
// }

export const BlogSkeleton = () => {
    return <div role="status" className="animate-pulse">
        <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
            <div className="flex">
                <div className="h-4 w-4 bg-gray-200 rounded-full w-48 mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                <div className="flex justify-center flex-col pl-2 flex justify-center flex-col">
                    <circle />
                </div>
                <div className="pl-2 font-thin text-slate-500 text-sm flex justify-center flex-col">
                    <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                </div>
            </div>
            <div className="text-xl font-semibold pt-2">
                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
            </div>
            <div className="text-md font-thin">
                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
            </div>
            <div className="text-slate-500 text-sm font-thin pt-4">
                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
            </div>
        </div>
        <span className="sr-only">Loading...</span>
    </div>
}

export const FullBlogSkeleton = () => {
    return (
        <div role="status" className="animate-pulse">
            <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
                <div className="flex">
                    <div className="h-4 w-4 bg-gray-200 rounded-full w-48 mb-4"></div>
                    <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                    <div className="flex justify-center flex-col pl-2 flex justify-center flex-col">
                        <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
                    </div>
                    <div className="pl-2 font-thin text-slate-500 text-sm flex justify-center flex-col">
                        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                    </div>
                </div>
                <div className="text-xl font-semibold pt-2">
                    <div className="h-2 bg-gray-200 rounded-full mb-2.5 w-3/4"></div>
                </div>
                <div className="text-md font-thin">
                    <div className="h-2 bg-gray-200 rounded-full mb-2.5 w-full"></div>
                    <div className="h-2 bg-gray-200 rounded-full mb-2.5 w-3/4"></div>
                    <div className="h-2 bg-gray-200 rounded-full mb-2.5 w-1/2"></div>
                </div>
                <div className="text-slate-500 text-sm font-thin pt-4">
                    <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                </div>
            </div>
            <span className="sr-only">Loading...</span>
        </div>
    );
};
