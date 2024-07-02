import { useNavigate } from "react-router-dom";
import { NoteInput } from "../components/molecules/NoteInput";
import { addNote } from "../data/remote/remote";

export const Add = () => {
  const navigate = useNavigate();

  async function onAddNoteHandler(title, body) {
    const { error } = await addNote({ title, body });
    if (!error) {
      navigate("/");
    }
  }

  return (
    <div className="mt-20 w-full lg:w-3/4">
      <h2 className="mb-4 font-lato text-lg font-bold">Add New Note</h2>
      <NoteInput addNote={onAddNoteHandler} />
    </div>
  );
};
