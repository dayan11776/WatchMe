export const ReduceFilter = (state,action) => {
  
    const {type,payload} = action

    switch (type) {
        case "LIST":
            return {...state,list:payload.list}
        case "MOVIE":
            return {...state,movie:payload.movie}
        case "MOVIETYPE":
            return {...state,selectionList:payload.movietype}
        case "GENRES":
            return {...state,genres:payload.genres}
        case "ADD":
            return {...state,favorites:payload.favorites}
        case "REMOVE":
            return {...state,favorites:payload.favorites}
        default:
            throw new Error("No case found");
    }

}
