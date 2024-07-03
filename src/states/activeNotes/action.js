import Swal from "sweetalert2";
import remote from "../../data/remote/remote";
import { showLoading, hideLoading } from "react-redux-loading-bar";

const ActionType = {
  RECEIVE_NOTES: "RECEIVE_NOTES",
  ADD_NOTE: "ADD_NOTE",
  ARCHIVE_NOTE: "ARCHIVE_NOTE",
  DELETE_NOTE: "DELETE_NOTE",
};

function receiveNotesActionCreator(notes) {
  return {
    type: ActionType.RECEIVE_NOTES,
    payload: {
      notes,
    },
  };
}

function addNoteActionCreator(note) {
  return {
    type: ActionType.ADD_NOTE,
    payload: {
      note,
    },
  };
}

function archiveNote(noteId) {
  return {
    type: ActionType.ARCHIVE_NOTE,
    payload: {
      noteId,
    },
  };
}

function deleteNote(noteId) {
  return {
    type: ActionType.DELETE_NOTE,
    payload: {
      noteId,
    },
  };
}

function asyncGetActiveNotes() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const notes = await remote.getActiveNotes();
      dispatch(receiveNotesActionCreator(notes));
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Opps...",
        text: error.message,
      });
    }
    dispatch(hideLoading());
  };
}

function asyncAddNote({ title, body }, navigate) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const { message, data } = await remote.addNote({ title, body });
      dispatch(addNoteActionCreator(data));
      Swal.fire({
        icon: "success",
        title: message,
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Opps...",
        text: error.message,
      });
    }
    dispatch(hideLoading());
  };
}

function asyncArchiveNote(noteId, navigate) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const message = await remote.archiveNote(noteId);
      dispatch(archiveNote(noteId));
      Swal.fire({
        icon: "success",
        title: message,
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/archived");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Opps...",
        text: error.message,
      });
    }
    dispatch(hideLoading());
  };
}

function asyncDeleteNote(noteId) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You want to delete this note?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#34d399",
        cancelButtonColor: "#f87171",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        const message = await remote.deleteNote(noteId);
        dispatch(deleteNote(noteId));
        Swal.fire({
          title: "Deleted!",
          text: message,
          icon: "success",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
      });
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveNotesActionCreator,
  addNoteActionCreator,
  archiveNote,
  deleteNote,
  asyncGetActiveNotes,
  asyncAddNote,
  asyncArchiveNote,
  asyncDeleteNote,
};
