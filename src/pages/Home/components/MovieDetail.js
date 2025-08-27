import { Link, useNavigate } from 'react-router-dom'
import { FetchDetail } from '../hooks/FetchDetail'

export const MovieDetail = ({id}) => {
  const navigate = useNavigate()
  const handleClose = () => {
    navigate(`/`)
  }

  const {data:Data} = FetchDetail(id)

  let image = ""
  if(Data.backdrop_path){
    image = `https://image.tmdb.org/t/p/w500/${Data.backdrop_path}`
  }else{
    if(Data.poster_path){
        image = `https://image.tmdb.org/t/p/w500/${Data.poster_path}`
    }else{
       image = "./assets/empty.jpg"
    }
  }

  //const image = Data.backdrop_path?`https://image.tmdb.org/t/p/w500/${Data.backdrop_path}`:"./assets/empty.jpg";

  return (
    <section className='detail bg-black border w-2/5 max-lg:w-11/12 max-sm:w-full'>
        <div className='relative h-2/3'>
            <button onClick={handleClose} className='absolute right-0 mx-3 my-3 rounded-full p-1 z-10' style={{  "backgroundColor":"rgba(0, 0, 0, 0.7)"}}>
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6"/>
                </svg>
            </button>
            <img className='w-full h-full' src={image} alt={Data.title} />
            <div className='bg-color top-0 flex items-end'>
                <div className='flex items-center mb-12'>
                    <Link to={`https://www.imdb.com/title/${Data.imdb_id}`} target='_blank' className='text-black bg-slate-200  ml-7 py-2 px-7 font-bold rounded-lg flex hover:bg-slate-300 items-center mr-3'> 
                        <svg className="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z" clipRule="evenodd"/>
                        </svg>
                        <span className='text-lg'>Play</span>
                    </Link>
                    <button className='favorite border p-1 rounded-full'>
                        <svg className="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <div className='h-1/4 mx-7 flex'>
           <div className='w-3/4 pr-7'>
                <h1 className='mb-3'>
                    <span className='text-white text-xl font-bold mr-3'>{Data.title}</span>
                    <span className='text-slate-400 text-sm'>{Data.status}:{Data.release_date}</span>
                </h1>
                <p className='text-white text-sm'>{Data.overview}</p>
           </div>
           <div className='w-1/3 mt-2'>
                <div className='flex flex-wrap'>
                    {
                        Data.genres && Data.genres.map((items) => 
                            <p key={items.id} className='text-white text-sm mr-2 border p-1 rounded mb-2' style={{"backgroundColor":"rgba(6, 20, 223, 0.7)"}}>{items.name}</p>
                        )
                    }
                </div>
                

                <div className="flex items-center">
                    <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <p className="ms-2  font-bold text-gray-900 dark:text-white">{Data.vote_average}</p>
                    <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                    <span className=" font-medium text-gray-900  dark:text-white">{Data.vote_average}</span>
                </div>

           </div>
        </div>
    </section>
  )
}
