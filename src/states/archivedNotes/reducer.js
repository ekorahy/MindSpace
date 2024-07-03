import { ActionType } from "./action";

function archivedNotesReducer(notes = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_ARCHIVED_NOTES:
      return action.payload.notes;
    case ActionType.UNARCHIVE_NOTE:
      return notes.filter((note) => note.id !== action.payload.noteId);
    case ActionType.DELETE_NOTE:
      return notes.filter((note) => note.id !== action.payload.noteId);
    default:
      return notes;
  }
}

export default archivedNotesReducer;
