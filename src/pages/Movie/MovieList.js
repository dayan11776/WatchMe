import { List } from './components/List'
import { SidebarMovie } from '../../components/layouts/SidebarMovie'
import { useState } from 'react'
import { Moviefetch } from './hooks/Moviefetch'

export const MovieList = ({setDropdown}) => {
  const [sidebar,setSideBar] = useState(false)
  const [movieType,setMovieType] = useState("")
  const {data:Data} = Moviefetch(movieType)

  function handleOnclick(){
    setSideBar(!sidebar)
    setDropdown(false)
  }


  return (
    <main className=' '>
       
          <div className='mb-7 items-end flex justify-end m-auto max-sm:mr-12' style={{"maxWidth":"1100px"}}>
            <button className='hover:scale-125 duration-300' onClick={handleOnclick}>
              <svg className="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeWidth="4" d="M12 6h.01M12 12h.01M12 18h.01"/>
              </svg>
            </button>
          </div>
      
        <List Data={Data}/>
        {sidebar && <SidebarMovie setMovieType={setMovieType}/>}
    </main>
  )
}
