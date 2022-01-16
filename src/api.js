import store from "./redux/store";

export const addTreatment = (newTreatment) => {
  newTreatment.date = new Date(newTreatment.date).toISOString();

  return fetch(`${process.env.REACT_APP_SERVER_URL}/treatments`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${store.getState().token}`,
    },
    body: JSON.stringify(newTreatment),
  });
};

export const getAllTreatments = (searchInput) =>
  fetch(`${process.env.REACT_APP_SERVER_URL}/treatments`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${store.getState().token}`,
    },
  });

export const updateTreatment = (id, newTreatment) => {
  newTreatment.date = new Date(newTreatment.date).toISOString();

  return fetch(`${process.env.REACT_APP_SERVER_URL}/treatments/${id}`, {
    method: "PUT",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${store.getState().token}`,
    },
    body: JSON.stringify(newTreatment),
  });
};

export const deleteTreatment = (id) =>
  fetch(`${process.env.REACT_APP_SERVER_URL}/treatments/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${store.getState().token}`,
    },
  });
