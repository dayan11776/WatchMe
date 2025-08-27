import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { UseContextFilter } from '../../usecontext/ContextFilter';

export const Header = ({dropdown,setDropdown}) => {

    const active = "block py-2 px-3 bg-red-700 rounded-sm md:bg-transparent md:p-0 text-red-700 font-bold max-sm:text-white dark:text-white"
    const inactive = "block py-2 px-3 text-black rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 max-sm:text-black dark:text-white dark:max-sm:text-black"
    const [search,setSearch] = useState(true)
    const [light,setLight] = useState( JSON.parse(localStorage.getItem("light"))|| false)
    const navigate = useNavigate()
    const {favorites} = UseContextFilter()

    useEffect(() => {
        localStorage.setItem("light",JSON.stringify(light))
        if(light){
            document.documentElement.classList.add("dark")
        }else{
            document.documentElement.classList.remove("dark")
        }
    },[light])

    const handleSearch = (e) => {
        e.preventDefault()
        const search = e.target.search.value
        e.target.reset()
        navigate(`?query=${search}`)
    } 

    function handleClose(){
        setDropdown(false)
        setSearch(false)
    }

    function handleView(){
        setDropdown(false)
        setSearch(true)
    }
    

  return (
    <header >
        <nav className="bg-red   border-gray-200 px-4">
        <div className="flex flex-wrap items-center justify-between mx-auto p-4">
           <div className="flex items-center">
                <Link onClick={handleView} to="/" className="flex items-center space-x-3 rtl:space-x-reverse mr-7">
                    <p className="self-center text-2xl font-semibold whitespace-nowrap text-black dark:text-white"><span className="text-red-800 text-3xl">W</span>atch<span className="text-red-800 text-3xl">M</span>e</p>
                </Link>
                <div className="relative flex items-center max-sm:flex-col">
                    <button onClick={() => setDropdown(!dropdown)} type="button" className="md:visible flex items-center md:hidden" aria-controls="navbar-default" aria-expanded="false">
                        <span className="text-black dark:text-white">Browse</span>
                        {
                            dropdown?(
                                <svg className="w-6 h-6 text-black dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M5.575 13.729C4.501 15.033 5.43 17 7.12 17h9.762c1.69 0 2.618-1.967 1.544-3.271l-4.881-5.927a2 2 0 0 0-3.088 0l-4.88 5.927Z" clipRule="evenodd"/>
                                </svg>
                            ):(
                                <svg className="w-6 h-6 text-black dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M18.425 10.271C19.499 8.967 18.57 7 16.88 7H7.12c-1.69 0-2.618 1.967-1.544 3.271l4.881 5.927a2 2 0 0 0 3.088 0l4.88-5.927Z" clipRule="evenodd"/>
                            </svg>
                            )
                        }
                    </button>
                    <div className={`${dropdown?"":"hidden"} w-full md:block max-sm:absolute max-sm:z-10 max-sm:bg-white max-sm:mt-7 max-sm:w-44`} id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  ">
                            <li onClick={handleView}>
                                <NavLink to="/" className={({isActive}) => isActive?active:inactive} aria-current="page">Home</NavLink>
                            </li>
                            <li onClick={handleClose}>
                                <NavLink to="/MovieList" className={({isActive}) => isActive?active:inactive}>Movie List</NavLink>
                            </li>
                            <li onClick={handleClose}>
                                <NavLink to="/TVseries" className={({isActive}) => isActive?active:inactive}>TV series</NavLink>
                            </li>
                            <li onClick={handleClose}>
                                <NavLink to="/Favorites" className={({isActive}) => isActive?active:inactive}><span className=' text-md font-bold text-blue-800 top-0'>{favorites.length}</span> Favorites</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
           </div>
            <div className="flex justify-around items-center">
                <button className={`${search?"":"hidden"} group flex relative items-center mr-3`}>
                    <form onSubmit={handleSearch} className='flex items-center'>
                        <input className='absolute right-0 mr-7 scale-x-0 group-focus:scale-x-100 origin-right duration-500 p-2 w-72 border text-black dark:border-white dark:bg-black dark:text-white focus:scale-x-100 max-sm:w-52' type="text" name="search" id="" placeholder='Search Title'></input>
                    </form>
                    <svg className="w-6 h-6 text-black dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
                    </svg>
                </button>
                <button onClick={() => setLight(!light)}>
                    {
                        light?(
                            <svg className="w-6 h-6 text-black dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"/>
                            </svg>
                        ):(
                            <svg className="w-6 h-6 text-black dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M11.675 2.015a.998.998 0 0 0-.403.011C6.09 2.4 2 6.722 2 12c0 5.523 4.477 10 10 10 4.356 0 8.058-2.784 9.43-6.667a1 1 0 0 0-1.02-1.33c-.08.006-.105.005-.127.005h-.001l-.028-.002A5.227 5.227 0 0 0 20 14a8 8 0 0 1-8-8c0-.952.121-1.752.404-2.558a.996.996 0 0 0 .096-.428V3a1 1 0 0 0-.825-.985Z" clipRule="evenodd"/>
                            </svg>
                        )
                    }
                </button>
            </div> 
        </div>
        </nav>

    </header>
  )
}

