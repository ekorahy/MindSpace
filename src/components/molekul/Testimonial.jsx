import { useEffect, useState } from 'react';
import { getTestimonial } from '../../data/local/testimonial';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { TestiItem } from './TestiItem';

export const Testimonial = () => {
  const [testimonial, setTestimonial] = useState([]);

  useEffect(() => {
    setTestimonial(getTestimonial())
  }, []);

  return (
    <div>
      <h2 className='font-bold text-xl text-center'>What did they say?</h2>
      <Swiper
        pagination={{ dynamicBullets: true }}
        modules={[Pagination]}
        className='py-10'
      >
       {testimonial.map((testi) => (
        <SwiperSlide key={testi.id}>
          <TestiItem
            name={testi.name}
            image={testi.image}
            body={testi.body}
          />
        </SwiperSlide>
      ))}
      </Swiper>
    </div>
  );
};
