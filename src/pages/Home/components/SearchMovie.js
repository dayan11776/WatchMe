import { Carousel } from "../../../components/others/Carousel"
import { useSearchParams } from 'react-router-dom';

export const SearchMovie = ({title}) => {

    const [searchParams] = useSearchParams()
    const queryTerm = searchParams.get("query")
  return (
    <section className="mb-12">
        <h1 className="px-7 text-2xl font-bold mb-4 dark:text-white">{queryTerm?`Searching:${queryTerm}`:""}</h1>
        <Carousel title={title} queryTerm={queryTerm} category="movie"/>
    </section>
  )
}
