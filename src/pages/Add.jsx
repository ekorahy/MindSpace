import { useNavigate } from "react-router-dom";
import { NoteInput } from "../components/molecules/NoteInput";
import { useDispatch } from "react-redux";
import { asyncAddNote } from "../states/activeNotes/action";

export const Add = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function onAddNoteHandler(title, body) {
    dispatch(asyncAddNote({title, body}, navigate))
  }

  return (
    <div className="mt-20 w-full lg:w-3/4">
      <h2 className="mb-4 font-lato text-lg font-bold">Add New Note</h2>
      <NoteInput addNote={onAddNoteHandler} />
    </div>
  );
};
