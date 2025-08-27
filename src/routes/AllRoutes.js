import { Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home/Home"
import { Favorites, MovieList, Tv } from "../pages"

export const AllRoutes = ({setDropdown}) => {
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/:id" element={<Home />}/>
        <Route path="/MovieList" element={<MovieList setDropdown={setDropdown}/>}/>
        <Route path="/Favorites" element={<Favorites />}/>
        <Route path="/TvSeries" element={<Tv setDropdown={setDropdown} />} />
    </Routes>
  )
}
