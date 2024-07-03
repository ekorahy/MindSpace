import Swal from "sweetalert2";
import remote from "../../data/remote/remote";

const ActionType = {
  RECEIVE_NOTE_DETAIL: "RECEIVE_NOTE_DETAIL",
};

function receiveNoteDetailActionCreator(detailNote) {
  return {
    type: ActionType.RECEIVE_NOTE_DETAIL,
    payload: {
      detailNote,
    },
  };
}

function asyncGetDetailNote(noteId) {
  return async (dispatch) => {
    try {
      const detailNote = await remote.getNote(noteId);
      dispatch(receiveNoteDetailActionCreator(detailNote));
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
      });
    }
  };
}

export { ActionType, asyncGetDetailNote };
