import { Popular } from './components/Popular'
import { Upcoming } from './components/Upcoming'
import { NowPlaying } from './components/NowPlaying'
import { TopRated } from './components/TopRated'
import { SearchMovie } from './components/SearchMovie'
import { useParams } from 'react-router-dom'
import { MovieDetail } from './components/MovieDetail'
import "./Home.css"
import { AiringToday } from './components/TV/AiringToday'
import { OnTheAir } from './components/TV/OnTheAir'
import { TvPopular } from './components/TV/TvPopular'
import BlurText from '../../components/others/BlurText'

export const Home = () => {
  const getId = useParams()
  
  return (
    <main className='relative'>
        {/* Movies */}
        {
          getId.id &&
          <div className='modal absolute p-4 w-full h-full z-10 flex justify-center'>
            <MovieDetail id={getId.id}/>
          </div>
        }
        <div className='relative'>
          <img className='movieBG h-96 w-full' src="./assets/background/movieBG2.jpg" alt="Movie Background" />
          <div className='movieBgColor h-full w-full absolute top-0'>
            <div className='relative pb-12 w-1/2 h-full flex justify-center items-center max-sm:w-full'>
              <h1 className='flex flex-col text-7xl font-bold text-white pl-20 max-sm:text-center max-sm:pl-0'>
                <BlurText
                  text="Movies to Watch,
                  Anytime Anywhere."
                  delay={300}
                  animateBy="words"
                  direction="top"
                  className='mb-4 max-sm:text-4xl max-sm:flex max-sm:justify-center'
                />
                <p className='text-2xl'>Enjoy and select your favorite Movies and TV series.</p>
              </h1>
            </div>
          </div>
        </div>
        <SearchMovie  title="search/movie"/>
        <Popular title="movie/popular" />
        <Upcoming title="movie/upcoming" />
        <NowPlaying title="movie/now_playing" />
        <TopRated title="movie/top_rated" />

        {/* TV Show */}
        <AiringToday title="tv/airing_today"  />
        <OnTheAir title="tv/on_the_air" />
        <TvPopular title="tv/popular" />
        <TvPopular title="tv/top_rated" />
    </main>
  )
}
