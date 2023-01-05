import React from "react";
import Navbar from "./assets/components/Navbar";
import Hero from "./assets/components/Hero";
import NewsCard from "./assets/components/NewsCard";
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
]

import buildIMG1 from "../public/Build/build-3.jpg";
import buildIMG2 from "../public/Build/build-x3.jpg";
import buildIMG3 from "../public/Build/build-5.jpg";
import buildIMG4 from "../public/Build/build-x5.jpg";

const buildData = [
  {
    id: 1,
    image: buildIMG1,
    title: "3 Series Sedan",
    text: "",
    link: {
      text: "Start Designing",
      icon: "",
      url: ""
    }
  },
  {
    id: 2,
    image: buildIMG2,
    title: "X3",
    text: "",
    link: {
      text: "Start Designing",
      icon: "",
      url: ""
    }
  },
  {
    id: 3,
    image: buildIMG3,
    title: "5 Series Sedan",
    text: "",
    link: {
      text: "Start Designing",
      icon: "",
      url: ""
    }
  },
  {
    id: 4,
    image: buildIMG4,
    title: "X5",
    text: "",
    link: {
      text: "Start Designing",
      icon: "",
      url: ""
    }
  }
]

import connectIMG from "../public/connect.png";
import creditIMG from "../public/credit-score.png";
import financingIMG from "../public/financing.png";
import valueIMG from "../public/value.png";


const ownershipData = [
  {
    id: 1,
    image: valueIMG,
    title: "Trade-in Value",
    text: "Get the latest information on your vehicle’s trade-in value today. ",
    link: {
      text: "Visit Black Book",
      icon: "fa-sharp fa-solid fa-arrow-up-right",
      url: ""
    }
  },
  {   
      id: 2,
      image: creditIMG,
      title: "Check Your Credit Score",
      text: "See where you stand on your journey to owning a BMW.",
      link: {
        text: "Visit Equifax",
        icon: "fa-sharp fa-solid fa-arrow-up-right",
        url: ""
      }
  },
  {   
      id: 3,
      image: financingIMG,
      title: "Apply for Financing",
      text: "Own the BMW of your dreams with BMW Financial Services.",
      link: {
        text: "Get Started",
        icon: "fa-sharp fa-solid fa-arrow-up-right",
        url: ""
      }
  },
  {   
      id: 4,
      image: connectIMG,
      title: "Stay Connected",
      text: "Receive the latest offers, releases, and news from BMW.",
      link: {
        text: "Sign Up Now",
        icon: "fa-sharp fa-solid fa-arrow-up-right",
        url: ""
      }
  },
]

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

      <div className="build__section section">
        <h2 className="section__title">Build the BMW of your dreams.</h2>
        <div className="card__container">
          {
            buildData.map(card => {
              return <DefaultCard 
                key={card.id}
                id={card.id}
                image={card.image}
                title={card.title}
                text={card.text}
                link={card.link}  
              />
            })
          }
        </div>
          <button>Build Your Own</button>
      </div>

      <Services />

      <div className="ownership__section section">
        <h2 className="section__title">Ownership starts here.</h2>
        <div className="card__container">
          {
            ownershipData.map(card => {
              return <DefaultCard 
                key={card.id}
                id={card.id}
                image={card.image}
                title={card.title}
                text={card.text}
                link={card.link}  
              />
            })
          }
        </div>

      </div>

    </main>
  )
}


function DefaultCard({title, text, image, link}) {

  return (
    <div className="card__default">
      <div className="card__image"  style={{backgroundImage: `url(${image})`}}/>
      <div className={text !== "" ? "card__title bold" : "card__title"}>{title}</div>
      {text !== "" && <div className="card__text">{text}</div>}
      <a href={link.url} className="card__link">{link.text}{link.icon !== "" && <i className={link.icon}/>}</a>
    </div>
  )
}