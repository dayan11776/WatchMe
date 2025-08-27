import { useContext, createContext, useReducer } from "react";
import { ReduceFilter } from "../reduce/ReduceFilter";
// import { useState,useEffect } from "react";

const dataInitialize = {
        list:"",
        selectionList:null,
        genres:null,
        movie:[],
        favorites:[]
    }

const CreateDataContext = createContext(dataInitialize)

export const DataContextFilter = ({children}) => {

    const [state,dispatch] = useReducer(ReduceFilter,dataInitialize)
    // const [data,setData] = useState([])
    // let url =  `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`
    // if(state.selectionList){
    //      url = `https://api.themoviedb.org/3/movie/${state.selectionList}?api_key=${process.env.REACT_APP_API_KEY}`
    // }

    // useEffect(() => {
    //     const getData = async () => { 
    //         const response = await fetch(url)
    //         const data = await response.json()
    //         setData(data.results)
    //     }

    //     getData()
    // },[url])

    function dataFilter(list){
        dispatch({
            type:"LIST",
            payload:{
                list:list
            }
        })
    }

    function dataMovie(list){
        dispatch({
            type:"MOVIE",
            payload:{
                movie:list
            }
        })
    }

    

    function filterAdd(items){
        const addFavorite = state.favorites.concat(items)
        dispatch({
            type:"ADD",
            payload:{
                favorites:addFavorite
            }
        })
    }

    function filterRemove(items){
        const removeFavorite = state.favorites.filter((movie) => movie.id !== items.id)
        dispatch({
            type:"REMOVE",
            payload:{
                favorites:removeFavorite
            }
        })
    }


    function filterGenres(list){
        if(state.genres === "Action"){
            return list.filter((items) => items.genre_ids.indexOf(28))
        }
        if(state.genres === "Adventure"){
            return list.filter((items) => items.genre_ids.indexOf(12))
        }

        if(state.genres === "Animation"){
            return list.filter((items) => items.genre_ids.indexOf(16))
        }

        if(state.genres === "Comedy"){
            return list.filter((items) => items.genre_ids.indexOf(35))
        }
        

        if(state.genres === "Crime"){
            return list.filter((items) => items.genre_ids.indexOf(18))
        }

        return list
    }
    

    const filterMovie = filterGenres(state.movie)

   
    const value = {
            list:state.list,
            movie:filterMovie,
            selectionList:state.selectionList,
            dataFilter,
            state,
            dispatch,
            favorites:state.favorites,
            filterAdd,
            dataMovie,
            filterRemove
        }

   return (
     <CreateDataContext.Provider value={value}>
        {children}
     </CreateDataContext.Provider>
   )
    
}

export const UseContextFilter = () => {
    return useContext(CreateDataContext)
}