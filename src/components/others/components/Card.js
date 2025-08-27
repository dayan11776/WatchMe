import { UseContextFilter } from "../../../usecontext/ContextFilter";
import { useEffect, useState } from "react";

export const Card = ({items}) => {

    const {title,overview,poster_path,id} = items
    const image = poster_path?`https://image.tmdb.org/t/p/w500/${poster_path}`:"./assets/empty.jpg";
    const {filterAdd,filterRemove,favorites} = UseContextFilter()
    const [isExist,setIsExist] = useState(false)

    useEffect(() => {
        const findFavorites = favorites.find((filterFavorites) => filterFavorites.id === id)
        if(findFavorites){
            setIsExist(true)
        }else{
            setIsExist(false)
        }
    },[favorites,id])

    
  return (
   <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm mb-4 mr-4 relative dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between max-md:max-w-lg max-sm:max-w-lg">
       <div>
        <div>
            <img className="rounded-t-lg" src={image} alt={title} />
        </div>
        <div className="p-5">
            <div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            </div>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{overview}</p>
        </div>
       </div>
        <div className=" self-end bottom-0 mb-3 mr-3">
            {/* <button onClick={() => dispatch({type:"ADD",payload:{favorites:items}})} className="flex p-2 border rounded-lg bg-blue-700 hover:bg-blue-800">
                <span className="mr-2 text-white">Add Favorite</span>
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5"/>
                </svg>
            </button> */}
            {
                isExist?(
                    <button onClick={() => filterRemove(items)} className="flex items-center p-2 border rounded-lg bg-red-700 hover:bg-red-800">
                        <span className="mr-2 text-white">Remove Favorite</span>
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6"/>
                        </svg>
                    </button>
                ):(
                    <button onClick={() => filterAdd(items)} className="flex items-center p-2 border rounded-lg bg-blue-700 hover:bg-blue-800">
                        <span className="mr-2 text-white">Add Favorite</span>
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5"/>
                        </svg>
                    </button>
                )
            }
             
        </div>
    </div>
  )
}
