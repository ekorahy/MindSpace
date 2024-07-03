import Swal from "sweetalert2";
import remote from "../../data/remote/remote";

const ActionType = {
  RECEIVE_ARCHIVED_NOTES: "RECEIVE_ARCHIVED_NOTES",
  UNARCHIVE_NOTE: "UNARCHIVE_NOTE",
  DELETE_NOTE: "DELETE_NOTE",
};

function receiveArchivedNotesActionCreator(notes) {
  return {
    type: ActionType.RECEIVE_ARCHIVED_NOTES,
    payload: {
      notes,
    },
  };
}

function unarchiveNote(noteId) {
  return {
    type: ActionType.UNARCHIVE_NOTE,
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

function asyncGetArchivedNotes() {
  return async (dispatch) => {
    try {
      const notes = await remote.getArchivedNotes();
      dispatch(receiveArchivedNotesActionCreator(notes));
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Opps...",
        text: error.message,
      });
    }
  };
}

function asyncUnarchiveNote(noteId, navigate) {
  return async (dispatch) => {
    try {
      const message = await remote.unarchiveNote(noteId);
      dispatch(unarchiveNote(noteId));
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
  };
}

function asyncDeleteNote(noteId) {
  return async (dispatch) => {
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
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
      });
    }
  };
}

export {
  ActionType,
  receiveArchivedNotesActionCreator,
  unarchiveNote,
  deleteNote,
  asyncGetArchivedNotes,
  asyncUnarchiveNote,
  asyncDeleteNote,
};
