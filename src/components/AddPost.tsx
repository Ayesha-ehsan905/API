import { useEffect, useState } from "react";
import { addPosts, Get } from "../utlis/Get";
import GetData from "./GetData";
import "./Style.css";

export const AddData = () => {
  const [name, setname] = useState("");
  const [flag, setFlag] = useState(false);
  //   const [lastSeen, setlastSeen] = useState("");
  //   const [image, setimage] = useState("");

  const [data, setdata] = useState([] as any);

  useEffect(() => {
    setFlag(false);
    const fetchPost = async () => {
      try {
        let response = await Get();

        setdata(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPost();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // setimage(
    //   "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/581.jpg"
    // );

    // setlastSeen("1664186162866");
    const response = await addPosts(name);
    setdata((posts) => [response.data, ...posts]);
    console.log(response.data);
    setFlag(true);
  };

  if (flag) {
    return <GetData />;
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

            {/* <div className="form-group">
              <label htmlFor="password">Last Seen</label>
              <input
                type="text"
                name="seen"
                value={lastSeen}
                onChange={(e) => setlastSeen(e.target.value)}
              />
            </div> */}

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
