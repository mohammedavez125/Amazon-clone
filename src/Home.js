import React, { useState, useEffect } from "react";
import "./Home.css";
import Product from "./Product";
import axios from "./axios";

function Home() {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/product/details");
      setInfo(req.data);
    }
    fetchData();
  });
  console.log(info);
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/30/digital/video/magellan/country/spain/EvergreenRefresh/fromDec19/ES_Evergreen_Refresh_ENG_SADLP_Tablet_1453x363.jpg"
          alt="Banner"
        />

        <div className="home__row">
          <Product
            // title="IT STARTS WITH US"
            title={info[0].title}
            image={info[0].image}
            price={info[0].price}
            rating={info[0].rating}
          />
          <Product
            title={info[1].title}
            image={info[1].image}
            price={info[1].price}
            rating={info[1].rating}
          />
        </div>

        <div className="home__row">
          <Product
            title={info[2].title}
            image={info[2].image}
            price={info[2].price}
            rating={info[2].rating}
          />
          <Product
            title={info[4].title}
            image={info[4].image}
            price={info[4].price}
            rating={info[4].rating}
          />
          <Product
            title={info[5].title}
            image={info[5].image}
            price={info[5].price}
            rating={info[5].rating}
          />
        </div>

        <div className="home__row">
          <Product
            title={info[3].title}
            image={info[3].image}
            price={info[3].price}
            rating={info[3].rating}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
