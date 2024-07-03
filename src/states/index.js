import { configureStore } from "@reduxjs/toolkit";
import authUserReducer from "./authUser/reducer";
import isPreloadReducer from "./isPreload/reducer";
import activeNotesReducer from "./activeNotes/reducer";
import archivedNotesReducer from "./archivedNotes/reducer";
import noteDetailReducer from "./detailNote/reducer";
import { loadingBarReducer } from "react-redux-loading-bar";

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    activeNotes: activeNotesReducer,
    archivedNotes: archivedNotesReducer,
    noteDetail: noteDetailReducer,
    loadingBar: loadingBarReducer,
  },
});

export default store;
