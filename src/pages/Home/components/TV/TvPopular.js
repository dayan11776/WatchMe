import { Carousel } from "../../../../components/others/Carousel"

export const TvPopular = ({title}) => {
  return (
    <section className="mb-12">
        <h1 className="px-7 text-2xl font-bold mb-4 capitalize dark:text-white">{title}</h1>
        <Carousel title={title} category="tv"/>
    </section>
  )
}
