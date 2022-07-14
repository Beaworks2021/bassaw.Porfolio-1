import React, {useState, useEffect} from 'react'
import PortfolioList from '../portfoliolist/PortfolioList'
import "./Portfolio.scss"
import {featuredPortfolio, webPortfolio, mobilePortfolio, uiuxPortfolio, graphicsPortfolio, brandingPortfolio} from "../../data.jsx"

const Portfolio = () => {

  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([])

  const list = [
    {
        id: "featured",
        title: "Featured"
    },
    {
        id: "web",
        title: "Web Apps"
    },
    {
        id: "mobile",
        title: "Mobile Apps"
    },
    {
        id: "ui",
        title: "UI/UX Designs"
    },
    {
        id: "graphic",
        title: "Graphcis Design"
    },
    {
        id: "brand",
        title: "Branding"
    },
   ];

   useEffect(()=>{

    switch(selected){
     
        case "featured":
          setData(featuredPortfolio);
          break;
        case "web":
          setData(webPortfolio);
          break;
        case "mobile":
          setData(mobilePortfolio);
          break;
        case "ui":
          setData(uiuxPortfolio);
          break;
        case "graphic":
          setData(graphicsPortfolio);
          break;
          case "brand":
            setData(brandingPortfolio);
            break;
        default:
          setData(featuredPortfolio);
    }

   }, [selected])

  return (
    <div className='portfolio' id="portfolio">
      <h1>
        Portfolio
      </h1>
      <ul>
        {list.map(item =>(  
          <PortfolioList key={item.id} title={item.title} active = {selected === item.id} setSelected={setSelected} id ={item.id}/>
          
        ))}
      </ul>

      <div className="container">
       {data.map((d)=>(
        <div className="item" key={data.id}>
          <img src={d.img} alt=""
          />
          <h3>{d.title}</h3>
        </div>
       ))}
        
        

      </div>
    </div>
  )
}

export default Portfolio