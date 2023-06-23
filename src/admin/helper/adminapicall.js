import { API } from "../../core/backend";

export const createCatagory = (
  userID,
  token,
  category
) => {
  return fetch(
    `${APi}/category/create/${userID}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(category),
    }
  )
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
