import { ActionType } from "./action";

function noteDetailReducer(detailNote = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_NOTE_DETAIL:
      return action.payload.detailNote;
    default:
      return detailNote;
  }
}

export default noteDetailReducer;
