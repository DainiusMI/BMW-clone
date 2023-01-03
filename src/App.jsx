import React from "react";
import Navbar from "./assets/components/Navbar";
import Hero from "./assets/components/Hero";
import Card from "./assets/components/Card";




const cardsData = [
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