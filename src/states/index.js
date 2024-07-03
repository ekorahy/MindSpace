import { configureStore } from "@reduxjs/toolkit";
import authUserReducer from "./authUser/reducer";
import isPreloadReducer from "./isPreload/reducer";
import activeNotesReducer from "./activeNotes/reducer";
import archivedNotesReducer from "./archivedNotes/reducer";
import noteDetailReducer from "./detailNote/reducer";

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    activeNotes: activeNotesReducer,
    archivedNotes: archivedNotesReducer,
    noteDetail: noteDetailReducer,
  },
});

export default store;