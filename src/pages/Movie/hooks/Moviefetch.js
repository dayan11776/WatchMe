import { useCallback, useEffect } from "react"
import { UseContextFilter } from "../../../usecontext/ContextFilter"

export const Moviefetch = (title) => {


    const {movie,dataMovie} = UseContextFilter()

        let url =  `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`
        if(title){
             url = `https://api.themoviedb.org/3/movie/${title}?api_key=${process.env.REACT_APP_API_KEY}`
        }

        const getData = useCallback( async () => { 
                const response = await fetch(url)
                const data = await response.json()
                dataMovie(data.results)
            },[url,dataMovie] )
    
        useEffect(() => {
           getData()
        },[getData])
        
  return {movie}
}
