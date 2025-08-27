import { Card } from "../../../components/others/components/Card"
import { TvSeriesFetch } from "../hooks/TvSeriesFetch"

export const List = ({Data}) => {

    const {movie:Movie} = TvSeriesFetch()

    
  return (
    <section className="flex m-auto flex-wrap max-lg:justify-evenly max-sm:flex-col max-sm:items-center" style={{"maxWidth":"1280px"}}>
      
      {
        Movie && Movie.map((items) => 
          <Card key={items.id} items={items}/>
        )
      }
    </section>
  )
}
