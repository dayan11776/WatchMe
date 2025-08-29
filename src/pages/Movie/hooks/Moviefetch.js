import { useEffect } from "react"
import { UseContextFilter } from "../../../usecontext/ContextFilter"
// import { useLocation } from "react-router-dom"
// import { useCallback } from "react"

export const Moviefetch = (title) => {


    const {movie,dataMovie} = UseContextFilter()
    // const search = useLocation().search
    // const searchParams = new URLSearchParams(search).get("search")
    // const url = `http://localhost:8000/products?name_like=${searchParams || ""}`

        let url =  `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`
        if(title){
             url = `https://api.themoviedb.org/3/movie/${title}?api_key=${process.env.REACT_APP_API_KEY}`
        }

        // const getData = useCallback( async () => { 
        //         const response = await fetch(url)
        //         const data = await response.json()
        //         dataMovie(data.results)
        //     },[url,dataMovie] )
    
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
