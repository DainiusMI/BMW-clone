import React from "react";
import Navbar from "./assets/components/Navbar";
import Hero from "./assets/components/Hero";
import NewsCard from "./assets/components/NewsCard";
import BuildCard from "./assets/components/BuildCard";
import Services from "./assets/components/Services";




const newsData = [
  {
    id: 1,
    title: "THE 2023 BMW X7",
    description: "NEXT-LEVEL LUXURY",
    link: ""
  },
  {
    id: 2,
    title: "THE 2023 BMW X5",
    description: "LEAD WITH CONFIDENCE",
    link: ""
  },
  {
    id: 3,
    title: "THE 2023 BMW 5 SERIES SEDAN",
    description: "THE 5",
    link: ""
  },
  {
    id: 4,
    title: "POWER AND PRESTIGE",
    description: "THE 8",
    link: ""
  },
];

import buildIMG1 from "../public/Build/build-3.jpg"
import buildIMG2 from "../public/Build/build-x3.jpg"
import buildIMG3 from "../public/Build/build-5.jpg"
import buildIMG4 from "../public/Build/build-x5.jpg"

const buildData = [
  {
    id: 1,
    title: "3 Series Sedan",
    image: buildIMG1,
    link: ""
  },
  {
    id: 2,
    title: "X3",
    image: buildIMG2,
    link: ""
  },
  {
    id: 3,
    title: "5 Series Sedan",
    image: buildIMG3,
    link: ""
  },
  {
    id: 4,
    title: "X5",
    image: buildIMG4,
    link: ""
  }
];


export default function App() {

  return (
    <main>

      <Navbar />

      <Hero />

      <div className="news__section">
        {
          newsData.map(card => {
            return <NewsCard 
                      key={card.id} 
                      id={card.id}
                      title={card.title}
                      description={card.description}
                      link={card.link}

                    />
          })
        }
      </div>

      <div className="build__section">
        <h2 className="section__title">Build the BMW of your dreams.</h2>
        <div className="card__section">
          {
            buildData.map(card => {
              return <BuildCard 
              key={card.id}
              title={card.title}
              image={card.image}
              link={card.link}
              />
            })
          }
        </div>
          <button>Build Your Own</button>
      </div>

      <Services />
    </main>
  )
}