import { UseContextFilter } from "../../usecontext/ContextFilter"

export const SidebarMovie = ({setMovieType}) => {
    const {dispatch} = UseContextFilter()

  return (
    <aside className='h-full absolute w-72 top-0 border shadow-sm'  style={{"backgroundColor":"rgba(0,0,0,0.8)"}}>
        <div>
            <div className='mb-3'>
                <h1 className='text-white text-2xl mt-4 pl-4 border-b font-bold'>Movie List</h1>
            </div>
            <div className='pl-4'>
                <div className='mb-2'>
                    {/* <input onChange={() => dispatch({type:"MOVIETYPE",payload:{movietype:"now_playing"}})} className='mr-2' type="radio" name="list" id="" /> */}
                    <input onChange={() => setMovieType("now_playing")} className='mr-2' type="radio" name="list" id="" />
                    <label htmlFor="NowPlaying" className='text-white'>Now Playing</label>
                </div>
                <div className='mb-2'>
                    {/* <input onChange={() => dispatch({type:"MOVIETYPE",payload:{movietype:"popular"}})}  className='mr-2' type="radio" name="list" id="" /> */}
                    <input onChange={() => setMovieType("popular")} className='mr-2' type="radio" name="list" id="" />
                    <label htmlFor="Popular" className='text-white'>Popular</label>
                </div>
                <div className='mb-2'>
                    {/* <input onChange={() => dispatch({type:"MOVIETYPE",payload:{movietype:"top_rated"}})} className='mr-2' type="radio" name="list" id="" /> */}
                     <input onChange={() => setMovieType("top_rated")} className='mr-2' type="radio" name="list" id="" />
                    <label htmlFor="TopRated" className='text-white'>Top Rated</label>
                </div>
                <div className='mb-2'>
                    {/* <input onChange={() => dispatch({type:"MOVIETYPE",payload:{movietype:"upcoming"}})} className='mr-2' type="radio" name="list" id="" /> */}
                     <input onChange={() => setMovieType("upcoming")} className='mr-2' type="radio" name="list" id="" />
                    <label htmlFor="Upcoming" className='text-white'>Upcoming</label>
                </div>
            </div>
        </div>

         <div>
            <div className='mb-3'>
                <h1 className='text-white text-2xl mt-4 pl-4 border-b font-bold'>Genres</h1>
            </div>
            <div className='pl-4'>
                <div className='mb-2'>
                    <input onChange={() => dispatch({type:"GENRES",payload:{genres:"Action"}})}  className='mr-2' type="checkbox" name="" id="" />
                    <label htmlFor="NowPlaying" className='text-white'>Action</label>
                </div>
                <div className='mb-2'>
                    <input onChange={() => dispatch({type:"GENRES",payload:{genres:"Adventure"}})} className='mr-2' type="checkbox" name="" id="" />
                    <label htmlFor="NowPlaying" className='text-white'>Adventure</label>
                </div>
                <div className='mb-2'>
                    <input onChange={() => dispatch({type:"GENRES",payload:{genres:"Animation"}})} className='mr-2' type="checkbox" name="" id="" />
                    <label htmlFor="NowPlaying" className='text-white'>Animation</label>
                </div>
                <div className='mb-2'>
                    <input onChange={() => dispatch({type:"GENRES",payload:{genres:"Crime"}})} className='mr-2' type="checkbox" name="" id="" />
                    <label htmlFor="NowPlaying" className='text-white'>Crime</label>
                </div>
                <div className='mb-2'>
                    <input onChange={() => dispatch({type:"GENRES",payload:{genres:"Comedy"}})} className='mr-2' type="checkbox" name="" id="" />
                    <label htmlFor="NowPlaying" className='text-white'>Comedy</label>
                </div>
            </div>
        </div>
    </aside>
  )
}
