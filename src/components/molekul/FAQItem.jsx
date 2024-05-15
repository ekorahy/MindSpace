import { MdOutlineArrowDropDown } from "react-icons/md";
import Proptypes from "prop-types";

export const FAQItem = ({ title, body }) => {
  return (
    <div className="py-5">
      <details className="group">
        <summary className="flex cursor-pointer list-none items-center justify-between">
          <h3 className="dark:text-white xl:text-xl">{title}</h3>
          <span className="transition group-open:rotate-180">
            <MdOutlineArrowDropDown className="dark:text-white" />
          </span>
        </summary>
        <p className="group-open:animate-fadeIn mt-3 text-sm font-light dark:text-white xl:text-lg">
          {body}
        </p>
      </details>
    </div>
  );
};

FAQItem.propTypes = {
  title: Proptypes.string.isRequired,
  body: Proptypes.string.isRequired,
};
