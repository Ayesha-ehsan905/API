import axios from "axios";
import { useState, useEffect } from "react";
import { Get } from "../utlis/Get";
import "../../src/App.css";

const GetData = () => {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setloading(true);
        let response = await Get();
        //   console.log((await response).data);
        setdata(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setloading(false);
      }
    };
    fetchPost();
  }, []);
  return (
    <>
      <div className="flex-container">
        {loading ? (
          <div className="loader"></div>
        ) : (
          <>
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
          </>
        )}
      </div>
    </>
  );
};

export default GetData;
