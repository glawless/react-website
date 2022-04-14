import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import image1 from "../images/img-1.jpg";
import image2 from "../images/img-2.jpg";
import image3 from "../images/img-3.jpg";
import image4 from "../images/img-4.jpg";
import image5 from "../images/img-5.jpg";

function Cards() {
  const cards = [
    {
      image: image1,
      text: "Experience The Sunrise On Breathtaking Hikes",
      label: "Adventure",
      path: "/services",
      key: "image1",
    },
    {
      image: image2,
      text: "Explore Tropical Islands On A Private Cruise",
      label: "Cruise",
      path: "/services",
      key: "image2",
    },
    {
      image: image3,
      text: "Set Sail in the Pacific Ocean Sight Seeing Dolphins",
      label: "Adventure",
      path: "/services",
      key: "image3",
    },
    {
      image: image4,
      text: "Play Football on Top of the Mountains",
      label: "Adrenaline",
      path: "/services",
      key: "image4",
    },
    {
      image: image5,
      text: "Stay In Luxurious Hotels In Bustling Cities",
      label: "Delicacy",
      path: "/services",
      key: "image5",
    },
  ];

  return (
    <div className="cards">
      <h1>Check out these Destinations</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {cards.map((card) => (
              <CardItem {...card} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
