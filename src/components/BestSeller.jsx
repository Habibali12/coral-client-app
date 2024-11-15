
import { useEffect, useState, useRef } from 'react';

import { Link } from 'react-router-dom';


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const BestSeller = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchBestProducts = async () => {
      try {
        const products = await fetch("/products.json").then((response) => response.json());
        const bestSellerProducts = products.filter((product) => product.status === "Best Selers");
        setProducts(bestSellerProducts);
      } catch(error) {
        console.log("Error Fetching Best Selling Products: ", error);
      }
    }
    fetchBestProducts();
  }, []);

  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-28 px-4'>
        <div className='text-center'>
            <h2 className="title">Best Seller Products</h2>
        </div>

        <div className='mb-16'>
            <Swiper
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            modules={[Autoplay]}
            className="mySwiper"
            breakpoints={{
                480: {
                  slidesPerView: 2
                },
                768: {
                  slidesPerView: 3
                },
                1024: {
                  slidesPerView: 4
                }
              }}
            >
                {
                  products.map((bestSeller, id) => (
                    <SwiperSlide key={id}>
                      <Link to={`/shop/${bestSeller.id}`}>
                        <img src={bestSeller.image} alt={bestSeller.title} className='mx-auto w-full hover:scale-105 transition-all duration-200' />
                      </Link>
                      <div className='mt-4 px-4'>
                          <h4 className='text-base font-semibold mb-2'>{bestSeller.title}</h4>
                          <div className='flex justify-between'>
                              <p className='text-dark/50'>{bestSeller.category}</p>
                              <p className='font-semibold'>${bestSeller.price}</p>
                          </div>
                      </div>
                    </SwiperSlide>
                  ))
                }
            </Swiper>
        </div>
    </div>
  )
}

export default BestSeller 