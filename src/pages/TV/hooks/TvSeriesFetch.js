import { useEffect } from "react"
import { UseContextFilter } from "../../../usecontext/ContextFilter"
// import { useCallback } from "react"

export const TvSeriesFetch = (title) => {


    const {movie,dataMovie} = UseContextFilter()

        let url =  `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}`
        if(title){
             url = `https://api.themoviedb.org/3/tv/${title}?api_key=${process.env.REACT_APP_API_KEY}`
        }
    
        // const getData = useCallback( async () => { 
        //     const response = await fetch(url)
        //     const data = await response.json()
        //     dataMovie(data.results)
        // },[url,dataMovie] )

        useEffect(() => {
           const getData =  async () => { 
              try{
                  const response = await fetch(url)
                    const data = await response.json()
                    dataMovie(data.results)
              }catch(e){
                console.log(e.message)
              }
            }
            getData()
        },[url]) //eslint-disable-line
        
  return {movie}
}
