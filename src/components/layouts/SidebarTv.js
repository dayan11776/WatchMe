export const SidebarTv = ({setTvType}) => {

  return (
    <aside className='h-full absolute w-72 top-0 border shadow-sm'  style={{"backgroundColor":"rgba(0,0,0,0.8)"}}>
        <div>
            <div className='mb-3'>
                <h1 className='text-white text-2xl mt-4 pl-4 border-b font-bold'>Movie List</h1>
            </div>
            <div className='pl-4'>
                <div className='mb-2'>
                    {/* <input onChange={() => dispatch({type:"MOVIETYPE",payload:{movietype:"now_playing"}})} className='mr-2' type="radio" name="list" id="" /> */}
                    <input onChange={() => setTvType("airing_today")} className='mr-2' type="radio" name="list" id="" />
                    <label htmlFor="NowPlaying" className='text-white'>Airing Today</label>
                </div>
                <div className='mb-2'>
                    {/* <input onChange={() => dispatch({type:"MOVIETYPE",payload:{movietype:"popular"}})}  className='mr-2' type="radio" name="list" id="" /> */}
                    <input onChange={() => setTvType("on_the_air")} className='mr-2' type="radio" name="list" id="" />
                    <label htmlFor="Popular" className='text-white'>On The Air</label>
                </div>
                <div className='mb-2'>
                    {/* <input onChange={() => dispatch({type:"MOVIETYPE",payload:{movietype:"top_rated"}})} className='mr-2' type="radio" name="list" id="" /> */}
                     <input onChange={() => setTvType("popular")} className='mr-2' type="radio" name="list" id="" />
                    <label htmlFor="TopRated" className='text-white'>Popular</label>
                </div>
                <div className='mb-2'>
                    {/* <input onChange={() => dispatch({type:"MOVIETYPE",payload:{movietype:"upcoming"}})} className='mr-2' type="radio" name="list" id="" /> */}
                     <input onChange={() => setTvType("top_rated")} className='mr-2' type="radio" name="list" id="" />
                    <label htmlFor="Upcoming" className='text-white'>Top Rated</label>
                </div>
            </div>
        </div>

        
    </aside>
  )
}
