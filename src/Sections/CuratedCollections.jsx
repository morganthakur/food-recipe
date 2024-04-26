import React from 'react'
import './caurated.css'
import imageOne from '../assets/sushi.png'
import imageTwo from '../assets/bagel.png'
import imageThree from '../assets/dishthree.png'
import imageFour from '../assets/fourth.png'
import imageFive from '../assets/cookie.png'
import imageSix from '../assets/sixth.png'
import CuratedCard from '../components/CuratedCard/CuratedCard'





const CuratedCollections = () => {

  const data = [
    {title:"Sushi combos for your next party",img:imageOne,recipe:150},
    {title:"Everything Bagel",img:imageTwo,recipe:150},
    {title:"Biriyani combos",img:imageThree,recipe:150},
    {title:"Dinner recipe ideas",img:imageFour,recipe:150},
    {title:"The ultimate cookie frenzy",img:imageFive,recipe:150},
    {title:"for the love of donuts",img:imageSix,recipe:150},
  ]



  return (
    <div className="cuartedCollectionWrapper">
      <div className="heading">
        <h1>Curated Collections</h1>
      </div>
      <div className='cuartedCollection'>

      {
        data.map((item,index)=>{
          return <CuratedCard image={item.img} title={item.title} value={item.recipe} key={index} />
        })
      }
      </div>

    </div>
  )
}

export default CuratedCollections