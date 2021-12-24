import PortfolioList from '../portfoliolist/portfoliolist'
import './portfolio.scss'
import {useState,useEffect} from 'react'
import {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio,
    contentPortfolio,
  } from "../data"
  

export default function Portfolio() {

  const [data, setData] = useState([]);
  const [selected, setSelected] = useState("featured")

  const list = [
      {
          id: "featured",
          title: "Featured",
      },
      {
        id: "web",
        title: "Web App",
    },  
    {
        id: "azure",
        title: "Azure",
    },
    {
      id: "devops",
      title: "Azure DevOps",
    }
  ]

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

    return (
        <div className='portfolio'>
            <h1>Portfolio</h1>
            <ul>
                {list.map(item=>(
                    <PortfolioList id={item.id} title={item.title} active={selected===item.id} setSelected={setSelected}></PortfolioList>
                ))}
            </ul>
            <div className="container">
            {data.map((d) => (
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
        ))}
            </div>
        </div>
    )
}
