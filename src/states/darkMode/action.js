const ActionType = {
  SET_THEME: "SET_THEME",
};

function setThemeActionCreator(theme) {
  return {
    type: ActionType.SET_THEME,
    payload: {
      theme,
    },
  };
}

function asyncSetTheme(theme) {
  return (dispatch) => {
    localStorage.setItem("theme", theme);
    dispatch(setThemeActionCreator(theme));
  };
}

export { ActionType, setThemeActionCreator, asyncSetTheme };
