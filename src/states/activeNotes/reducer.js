import { ActionType } from "./action";

function activeNotesReducer(notes = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_NOTES:
      return action.payload.notes;
    case ActionType.ADD_NOTE:
      return [...notes, action.payload.note];
    case ActionType.ARCHIVE_NOTE:
      return notes.filter((note) => note.id !== action.payload.noteId);
    case ActionType.DELETE_NOTE:
      return notes.filter((note) => note.id !== action.payload.noteId);
    default:
      return notes;
  }
}

export default activeNotesReducer;
