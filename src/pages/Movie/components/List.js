import { Card } from "../../../components/others/components/Card"
import { Moviefetch } from "../hooks/Moviefetch"

export const List = ({Data}) => {

    const {movie:Movie} = Moviefetch()

    
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
