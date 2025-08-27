import { useState,useEffect } from "react"
import { UseContextFilter } from "../../../usecontext/ContextFilter"

export const FetchDetail = (id) => {
    const [data,setData] = useState([])
    const {list} = UseContextFilter()
    const url = `https://api.themoviedb.org/3/${list}/${id}?api_key=${process.env.REACT_APP_API_KEY}`
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
                setData(data)
            }catch(e){
                setLoading(false)
                setError(e.message)
            }
        }

        getData()
    },[url])

    return {data,loading,error}
}
