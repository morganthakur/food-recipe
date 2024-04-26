import React from 'react'
import './CuratedCard.css'
const CuratedCard = ({image,title,value}) => {
  return (
    <div className='curatedCardWrapper'>
        <img src={image} alt="" />
        <div className="cardConent">
        <p> {title} </p>
        <button>
            {value} Recipes
        </button>
        </div>
      
    </div>
  )
}

export default CuratedCard