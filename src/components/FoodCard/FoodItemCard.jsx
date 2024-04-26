import React from 'react'
import Rating from '../Rating/Rating'
import './FoodCard.css'
import { useNavigate } from 'react-router-dom'

const FoodItemCard = ({image,title,ratingValue}) => {
  const navigate = useNavigate()
  return (
    <div className='foodCard' onClick={()=>navigate(`foodItem/${title.replace("","-")}`)} >
<img src={image} alt="" />
<div className='content'>
  {
    ratingValue?<Rating value={ratingValue} />:null
  }

      <p> {title} </p>
</div>

    </div>
  )
}

export default FoodItemCard