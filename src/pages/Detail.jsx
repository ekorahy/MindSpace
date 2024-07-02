import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { showFormattedDate } from "../utils";
import parse from "html-react-parser";
import { MdArchive, MdUnarchive, MdDelete } from "react-icons/md";
import {
  archiveNote,
  deleteNote,
  getNote,
  unarchiveNote,
} from "../data/remote/remote";

export const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [note, setNote] = useState([]);

  useEffect(() => {
    getNote(id).then(({ data }) => {
      setNote(data);
    });
  }, [id]);

  function onDeleteHandler(id) {
    deleteNote(id);

    navigate("/");
  }

  function onArchiveHandler(id) {
    archiveNote(id);

    navigate("/archived");
  }

  function onUnarchiveHandler(id) {
    unarchiveNote(id);

    navigate("/");
  }

  const { title, createdAt, body, archived } = note;

  return (
    <div className="mt-16">
      <h3 className="text-3xl font-bold">{title}</h3>
      <p className="text-lg font-light">{showFormattedDate(createdAt)}</p>
      <p className="text-lg">{parse(`${body}`)}</p>
      <div className="my-8 flex justify-end gap-2">
        {archived ? (
          <button
            className="rounded-md bg-yellow-400 p-3 text-lg text-white hover:bg-yellow-600"
            onClick={() => onUnarchiveHandler(id)}
          >
            <MdUnarchive />
          </button>
        ) : (
          <button
            className="rounded-md bg-slate-400 p-3 text-lg text-white hover:bg-slate-600"
            onClick={() => onArchiveHandler(id)}
          >
            <MdArchive />
          </button>
        )}
        <button
          className="rounded-md bg-rose-400 p-3 text-lg text-white hover:bg-rose-600"
          onClick={() => onDeleteHandler(id)}
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
};
