import { useContext, useEffect, useState } from 'react';
import { getTestimonial } from '../../data/local/testimonial';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { TestiItem } from './TestiItem';
import { LanguageContext } from '../../contexts/LanguageContext';

export const Testimonial = () => {
  const [testimonial, setTestimonial] = useState([]);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    setTestimonial(getTestimonial());
  }, []);

  return (
    <div>
      <h2 className='font-bold text-xl text-center dark:text-white'>
        {language === 'en' ? 'What did they say' : 'Apa kata mereka'}?
      </h2>
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
