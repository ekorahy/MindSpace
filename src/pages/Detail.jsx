import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { showFormattedDate } from "../utils";
import parse from "html-react-parser";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetDetailNote } from "../states/detailNote/action";

export const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { noteDetail = null } = useSelector((states) => states);

  useEffect(() => {
    dispatch(asyncGetDetailNote(id));
  }, [dispatch, id]);

  if (!noteDetail) {
    return null;
  }

  return (
    <div className="mt-20 lg:mt-0">
      <h3 className="mb-2 text-3xl font-bold">{noteDetail.title}</h3>
      <p className="mb-6 text-lg font-light">
        {showFormattedDate(noteDetail.createdAt)}
      </p>
      <p className="text-lg">{parse(`${noteDetail.body}`)}</p>
    </div>
  );
};
