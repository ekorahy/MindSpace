import { MdOutlineArrowDropDown } from 'react-icons/md';
import Proptypes from 'prop-types';

export const FAQItem = ({ title, body }) => {
  return (
    <div>
      <div className='py-5'>
        <details className='group'>
          <summary className='flex cursor-pointer list-none items-center justify-between'>
            <h3 className='font-semibold'>{title}</h3>
            <span className='transition group-open:rotate-180'>
              <MdOutlineArrowDropDown />
            </span>
          </summary>
          <p className='group-open:animate-fadeIn mt-3 text-neutral-400'>
            {body}
          </p>
        </details>
      </div>
    </div>
  );
};

FAQItem.propTypes = {
  title: Proptypes.string.isRequired,
  body: Proptypes.string.isRequired,
};
