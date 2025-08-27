import { UseContextFilter } from "../../usecontext/ContextFilter"
import { Card } from "../../components/others/components/Card"

export const Favorites = () => {
    const {favorites} = UseContextFilter()

  return (
    <main>
        <section className="flex m-auto flex-wrap max-lg:justify-evenly max-sm:flex-col max-sm:items-center" style={{"maxWidth":"1280px"}}>
           {
              favorites &&
              favorites.map((items) => 
                <Card key={items.id} items={items}/>
              )
           }
        </section>
    </main>
  )
}
