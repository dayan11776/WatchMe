import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Carousel.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Fetch } from '../../hooks/Fetch';
import FuzzyText from './FuzzyText';
import { useNavigate } from 'react-router-dom';
import { UseContextFilter } from '../../usecontext/ContextFilter';

export const Carousel = ({title,queryTerm,category}) => {

  const {data:Data,loading,error} = Fetch(title,queryTerm)
  const image = "https://image.tmdb.org/t/p/w500/";
  const navigate = useNavigate()

  const handleAdd = (val) => {
    navigate(`/${val}`)
  }
  const {dataFilter} = UseContextFilter()
  return (
    <>
      {error && 
        <div className='flex justify-center'>
          <FuzzyText 
          baseIntensity={0.2} 
          // hoverIntensity={hoverIntensity} 
          // enableHover={enableHover}
          >
            {error} not found
          </FuzzyText>
        </div>
      }
         {
          loading?(
            <h1 style={{"height":"200px"}} className=" mx-7 text-white flex items-center justify-center text-5xl">Loading.......</h1>
          ):(
            <div className='px-7'>
              <Swiper
                // slidesPerView={7}
                spaceBetween={10}
                loop={false}
                centeredSlides={false}
                slidesPerGroupSkip={0}
                grabCursor={true}
                keyboard={{
                  enabled: true,
                }}
                breakpoints={{
                  1700: {
                    slidesPerView: 7,
                    slidesPerGroup: 7,
                  },
                  1000: {
                    slidesPerView: 5,
                    slidesPerGroup: 5,
                  },
                  400: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                  }
                }}
                pagination={{
                  clickable: true,
                }}
                // autoplay={{
                //   delay: 4000,
                //   disableOnInteraction: false,
                // }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                {
                  Data && Data.map((items) => 
                      <SwiperSlide key={items.id} className='scale-100 hover:scale-90 duration-300'>
                        <img className='cursor-pointer' src={`${items.backdrop_path?image:""}${items.backdrop_path?items.backdrop_path:"./assets/empty.jpg"}`} alt="" />
                        <div onClick={() => handleAdd(items.id,dataFilter(category))} className='bg-color cursor-pointer flex text-start'><span className='title-movie text-lg pt-2 pl-2 text-white'>{items.title}</span></div>
                      </SwiperSlide>
                  )
                }
              </Swiper>
            </div>
          )
         }
    </>
  );
}
