import axios from "axios";
import { useState, useEffect } from "react";
import { Get } from "../utlis/Get";
import "../../src/App.css";

const GetData = () => {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      setloading(true);
      let response = await Get();
      //   console.log((await response).data);
      setdata(response.data);
      setloading(false);
    };
    fetchPost();
  }, []);
  return (
    <>
      {/* <div>
        {data.map((item) => {
          return (
            <div>
              <h2>name: {item.name}</h2>
              <h2>name: {item.id}</h2>
            </div>
          );
        })}
      </div> */}

      <div className="flex-container">
        {data.map((items) => {
          return (
            <div className="col card" key={items.id}>
              <div className="img-placeholder">
                <img src={items.avatar} />
              </div>
              <div className="title">
                <h3>
                  <span className="title-content">Name</span>:{items.name}
                </h3>
                <h3>
                  <span className="title-content">Created Time</span>:
                  {new Date(items.createdAt).toLocaleString()}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default GetData;
