import React from 'react'
import imageOne from '../assets/oneFood.png'
import imageTwo from '../assets/soup.png'
import imageThree from '../assets/three.png'
import FoodItemCard from '../components/FoodCard/FoodItemCard'
import './Hero.css'


const HeroSection = () => {

const data = [
  {title:"Very berry Healthy Summer Smoothie",img:imageOne,rating:4},
  {title:"Carrot and ginger soup",img:imageTwo,rating:4},
  {title:"Loaded mixed berries Mini tart",img:imageThree,rating:4},
]


  return (
    <div className='heroWrapper'>
      <div className="hero">

      {
        data?.map((item,index)=>{
          return <FoodItemCard title={item.title} image={item.img}ratingValue={item.rating} key={index} />
        })
      }
      </div>

    </div>
  )
}

export default HeroSection