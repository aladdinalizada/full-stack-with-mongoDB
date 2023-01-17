import React, { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch("http://localhost:3000/users");
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);
  return (
    <div>
      <div className="home">
        <div className="headText">
          <h2>User List</h2>
        </div>
        <div className="cards">
          {data.map((item) => {
            return (
              <div className="card">
                <div className="cardImage">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png?20200919003010"
                    alt=""
                    width={190}
                  />
                </div>
                <div className="cardContext">
                  <h3>{item.name}</h3>
                  <p>
                    User Email:<a href="">{item.email}</a>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
