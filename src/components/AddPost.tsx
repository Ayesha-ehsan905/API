import { useEffect, useState } from "react";
import App from "../App";
import { addUser, getUsers } from "../utlis/Users";
import GetData from "./GetData";
import "./Style.css";

export const AddData = () => {
  const [name, setname] = useState("");
  const [flag, setFlag] = useState(false);

  const [data, setdata] = useState([] as any);

  useEffect(() => {
    setFlag(false);
    const fetchPost = async () => {
      try {
        let response = await getUsers();

        setdata(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPost();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await addUser(name);
    setdata((posts) => [response.data, ...posts]);
    console.log(response.data);
    setFlag(true);
  };

  if (flag) {
    return <AddData />;
  }
  return (
    <>
      <div className="form-container">
        <div className="form-wrap">
          <h1>Sign up</h1>
          <p>It's free and only takes a minute!</p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name"> Name</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
            </div>

            <div className="" style={{ marginTop: "50px" }}>
              <label htmlFor="password">Image</label>
              <input type="file" name="password" />
            </div>

            <button type="submit" className="btn">
              Sign Up
            </button>

            <p className="below-text">
              Already have an account? <a href="#">Log in </a>
            </p>
          </form>
        </div>
      </div>
      <GetData />
    </>
  );
};
