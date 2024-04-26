import React from 'react'
import './LatestRecipeCard.css'
import userimg from '../../assets/Intersect.svg'
const LatestRecipeCard = ({img,text,userName,date,discription}) => {
  return (
    <div className='LatestRecipeCard'>
        <img src={img} alt="" />
<div className="discription">

        <h2>{text} </h2>
        <p> {discription} </p>
<div className="userProfile">
  <div className="user">
  <img src={userimg} alt="" />
  <h3> {userName} </h3>
  </div>
  <span> {date} </span>
</div>
</div>

    </div>
  )
}

export default LatestRecipeCard