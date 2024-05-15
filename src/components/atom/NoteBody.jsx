import { showFormattedDate } from "../../utils/index";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import PropTypes from "prop-types";

export const NoteBody = ({ id, title, createdAt, body }) => {
  return (
    <div className="mb-16 dark:text-white">
      <h3 className="font-semibold hover:text-violet-400">
        <Link to={`/detail/${id}`}>{title}</Link>
      </h3>
      <p className="font-light">{showFormattedDate(createdAt)}</p>
      <div className="line-clamp-3">{parse(`${body}`)}</div>
    </div>
  );
};

NoteBody.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
