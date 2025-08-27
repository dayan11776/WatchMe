import { useState,useEffect } from "react"
export const Fetch = (title,queryTerm="") => {
    const [data,setData] = useState([])
    const url = `https://api.themoviedb.org/3/movie/${title}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm?queryTerm:""}`
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState("")

    useEffect(() => {
        const getData = async () => {
            try{
                setLoading(true)
                const response = await fetch(url)
                if(!response.ok){
                    throw new Error(`${response.status}`)
                }
                const data = await response.json()
                setLoading(false)
                setData(data.results)
            }catch(e){
                setLoading(false)
                setError(e.message)
            }
        }

        getData()
    },[url])

    return {data,loading,error}
}
