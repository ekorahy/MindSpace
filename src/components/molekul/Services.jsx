import { ServiceItem } from '../atom/ServiceItem';
import { PiHandTap } from 'react-icons/pi';
import { MdMoneyOff } from 'react-icons/md';
import { AiOutlineSafety } from 'react-icons/ai';

export const Services = () => {
  return (
    <div className='my-10'>
      <div className='bg-violet-400 rounded p-4'>
        <h2 className='font-bold text-lg text-white text-center xl:text-xl'>
          Why choose us?
        </h2>
        <div className='max-w-screen-lg mx-auto grid grid-cols-1 gap-2 mt-4 sm:grid-cols-3'>
          <ServiceItem title='Easy to use' icon={<PiHandTap />} />
          <ServiceItem title='100% free' icon={<MdMoneyOff />} />
          <ServiceItem title='Trusted and secure' icon={<AiOutlineSafety />} />
        </div>
      </div>
    </div>
  );
};
