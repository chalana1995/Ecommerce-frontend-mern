import { API } from "../config";

export const signUp = async (user) => {
  return fetch(`${API}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log("==== error", err);
    });
};

export const signIn = async (user) => {
  return fetch(`${API}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log("==== error", err);
    });
};

export const authenticate = (data, next) => {
  if (typeof Window !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(data));
  }
};
