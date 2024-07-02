import PropTypes from "prop-types";

export const TestiItem = ({ name, image, body }) => {
  return (
    <div className="text-center">
      <img
        className="mx-auto mb-2 h-32 rounded-full border-2 border-violet-400 p-1 sm:h-56"
        src={image}
        alt=""
      />
      <h3 className="font-semibold dark:text-white sm:mt-2 xl:text-xl">
        {name}
      </h3>
      <p className="mx-auto font-light dark:text-white lg:w-3/4 xl:text-xl">
        <q>{body}</q>
      </p>
    </div>
  );
};

TestiItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
