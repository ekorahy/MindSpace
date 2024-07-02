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
    <div>
      <h2 className="mb-4 text-lg font-bold xl:text-2xl">Add Note</h2>
      <NoteInput addNote={onAddNoteHandler} />
    </div>
  );
};
