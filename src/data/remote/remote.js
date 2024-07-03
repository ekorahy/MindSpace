const remote = (() => {
  const BASE_URL = "https://notes-api.dicoding.dev/v1";

  function getAccessToken() {
    return localStorage.getItem("accessToken");
  }

  function putAccessToken(accessToken) {
    return localStorage.setItem("accessToken", accessToken);
  }

  async function _fetchWithToken(url, options = {}) {
    return fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });
  }

  async function login({ email, password }) {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    const {
      data: { accessToken },
    } = responseJson;
    return { message, accessToken };
  }

  async function register({ name, email, password }) {
    const response = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const responseJson = await response.json();
    const { status, message } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    return message;
  }

  async function getUserLoggedIn() {
    const response = await _fetchWithToken(`${BASE_URL}/users/me`);
    const responseJson = await response.json();

    const { status, message, data } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    return data;
  }

  async function addNote({ title, body }) {
    const response = await _fetchWithToken(`${BASE_URL}/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, body }),
    });

    const responseJson = await response.json();

    const { status, message, data } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    return { message, data };
  }

  async function getActiveNotes() {
    const response = await _fetchWithToken(`${BASE_URL}/notes`);
    const responseJson = await response.json();

    const { status, message, data } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    return data;
  }

  async function getArchivedNotes() {
    const response = await _fetchWithToken(`${BASE_URL}/notes/archived`);
    const responseJson = await response.json();

    const { status, message, data } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    return data;
  }

  async function getNote(id) {
    const response = await _fetchWithToken(`${BASE_URL}/notes/${id}`);
    const responseJson = await response.json();

    const { status, message, data } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    return data;
  }

  async function archiveNote(id) {
    const response = await _fetchWithToken(`${BASE_URL}/notes/${id}/archive`, {
      method: "POST",
    });

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    return message;
  }

  async function unarchiveNote(id) {
    const response = await _fetchWithToken(
      `${BASE_URL}/notes/${id}/unarchive`,
      {
        method: "POST",
      },
    );

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    return message;
  }

  async function deleteNote(id) {
    const response = await _fetchWithToken(`${BASE_URL}/notes/${id}`, {
      method: "DELETE",
    });

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    return message;
  }

  return {
    getAccessToken,
    putAccessToken,
    login,
    register,
    getUserLoggedIn,
    addNote,
    getActiveNotes,
    getArchivedNotes,
    getNote,
    archiveNote,
    unarchiveNote,
    deleteNote,
  };
})();

export default remote;
