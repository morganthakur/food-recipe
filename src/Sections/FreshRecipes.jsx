import React from "react";
import pie from '../assets/pie.png'
import LatestRecipeCard from "../components/LatestRecipeCard/LatestRecipeCard";
import './FreshRecipe.css'
import imageOne from '../assets/pumkin.png'
import imageTwo from '../assets/marsh.png'
import imageThree from '../assets/pummarsh.png'
import imageFour from '../assets/pumkinpie.png'
import FoodItemCard from "../components/FoodCard/FoodItemCard";

const FreshRecipes = () => {
  const data = [
    {
      title: "Pumpkin marshmallow pie",
      discription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      img: pie,
      userName: "John Doe",
      date:"Yesterday"
    },
    {
      title: "Pumpkin marshmallow pie",
      discription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      img: pie,
      userName: "John Doe",
      date:"Yesterday"
    },
    
  ];


  const recipeData = [
    {title:"Pumpkin marshmallow pie",img:imageOne},
    {title:"Pumpkin marshmallow pie",img:imageTwo},
    {title:"Pumpkin marshmallow pie",img:imageThree},
    {title:"Pumpkin marshmallow pie",img:imageFour},

  ]












  return (
    <div className="freshRecipeWrapper">
      <div className="recipeGridWrapper">
        <div className="latsetRecipe">
          <div className="recipeHeading">
            <h1>Latest recipes</h1>
          </div>
          {
            data.map((item,index)=>{
              return <LatestRecipeCard img={item.img} text={item.title} key={index} discription={item.discription} userName={item.userName} date={item.date}  />
            })
          }
        </div>
        <div className="freshRecipe">
        <div className="freshHeading">
            <h1>Latest recipes</h1>
          </div>
         {
          recipeData.map((item,index)=>{
          return  <div className="freshCard">
            <img src={item.img} alt="" />
            <p> {item.title} </p>
          </div>
          })
         }
        </div>
      </div>
    </div>
  );
};

export default FreshRecipes;
