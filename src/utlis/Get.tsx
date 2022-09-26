import axios from "axios";
import client from "../api/APIS";

export const Get = async () => {
  let response = await client.get(`/users`);

  return response;
};
