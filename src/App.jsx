import React from "react";
import Navbar from "./assets/components/Navbar";
import Hero from "./assets/components/Hero";
import Card from "./assets/components/Card";

const cardsData = [
  {
    id: 1,
    image: "../public/BMW-MY23-X7-Secondary-FMA-Desktop.jpg",
    title: "THE 2023 BMW X7",
    description: "NEXT-LEVEL LUXURY",
    link: ""
  },
  {
    id: 2,
    image: "../public/BMW-HP-X5-Secondary-FMA-Desktop.jpg",
    title: "THE 2023 BMW X5",
    description: "LEAD WITH CONFIDENCE",
    link: ""
  },
  {
    id: 3,
    image: "../public/BMW-MY22-5Series-Homepage-SecondaryFMA-Desktop.jpg",
    title: "THE 2023 BMW 5 SERIES SEDAN",
    description: "THE 5",
    link: ""
  },
  {
    id: 4,
    image: "../public/BMW-HP-June-Secondary-FMA-8Series-GC-Desktop.jpg",
    title: "POWER AND PRESTIGE",
    description: "THE 8",
    link: ""
  },
]


export default function App() {


  return (
    <main>
      <Navbar />
      <Hero />
      <div className="cards__section">
        {
          cardsData.map(card => {
            return <Card key={card.id} card={card} />
          })
        }
      </div>
    </main>
  )
}