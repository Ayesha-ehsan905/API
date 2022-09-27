import axios from "axios";
import client from "../api/APIS";

export const getUsers = async () => {
  let response = await client.get(`/users`);

  return response;
};

export const addUser = async (name) => {
  const response = await axios.post(
    "https://633145973ea4956cfb5a0314.mockapi.io/api/v1/users",
    {
      name: name,
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/581.jpg",
      last_seen: "1664186162866",
    }
  );

  return response;
};
