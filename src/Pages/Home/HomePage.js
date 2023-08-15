import React from "react";
import HomeCategory from "../../Components/Home/HomeCategory";
import Slider from "./../../Components/Home/Slider";
const HomePage = () => {
  return (
    <div className="font" style={{ minHeight: "670px" }}>
      <Slider />
      <HomeCategory />
    </div>
  );
};

export default HomePage;
