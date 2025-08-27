import { useEffect } from "react"
import { UseContextFilter } from "../../../usecontext/ContextFilter"

export const TvSeriesFetch = (title) => {


    const {movie,dataMovie} = UseContextFilter()

        let url =  `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}`
        if(title){
             url = `https://api.themoviedb.org/3/tv/${title}?api_key=${process.env.REACT_APP_API_KEY}`
        }
    
        useEffect(() => {
            const getData = async () => { 
                const response = await fetch(url)
                const data = await response.json()
                dataMovie(data.results)
            }
            getData()
        },[url])
  return {movie}
}
