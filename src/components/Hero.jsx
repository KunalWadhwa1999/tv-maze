import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
const Hero = () => {
  const [heroData, setHeroData] = useState([]);
  async function getData() {
    try {
      const response = await axios.get(
        "https://api.tvmaze.com/search/shows?q=all"
      );
      setHeroData(response.data);
    } catch (error) {
      console.log("Error", error);
    }
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {heroData.map((movie) => {
        return <Card key={movie.show.id} movie={movie.show} />;
      })}
    </>
  );
};

export default Hero;
