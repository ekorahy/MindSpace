import PropTypes from "prop-types";

export const ServiceItem = ({ title, icon }) => {
  return (
    <div className="rounded bg-white p-4 dark:bg-black">
      <img className="mx-auto mb-4 h-32" src={icon} />
      <h3 className="text-center font-light text-violet-400 xl:text-xl">
        {title}
      </h3>
    </div>
  );
};

ServiceItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};
