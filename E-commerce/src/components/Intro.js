import React from "react";
import "../../src/components/Home.css";
import { colors } from "@mui/material";
import Navbar from "./Navbar";

const Intro = () => {
	const backgroundImageStyle = {
		backgroundImage: `url("Assets/Shoes/slider-bg-1.jpg")`, // Replace with your image path
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		height: "60vh", // Make the background cover the full viewport height
	  };

	return (  
		<div>
      <Navbar/>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/Assets/Shoes/banner5.jpg" className="d-block w-100" alt="..." height={600} />
    </div>
   
    <div className="carousel-item">
      <img src="\Assets\Shoes\logo2.jpg" className="d-block w-100" alt="..." height={600} />
    </div>

	<div className="carousel-item">
      <img src="\Assets\PHOTO-2024-11-26-19-44-42.jpg" className="d-block w-100" alt="..." height={600} />
    </div>
  </div>

  
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </div>
	);
};

export default Intro;
