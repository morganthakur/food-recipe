import React from 'react'
import './RecipeDetails.css'
import foodDetails from '../../assets/foodDetails.png' 
const RecipeDetails = () => {
  return (
    <div className="detailsWrapper">
        <div className='detailsPhoto'>
<img src={foodDetails} alt="" />
        </div>

        <div className='detailsHeading'>
            <h1>Pumpkin marshmallow pie</h1>
        </div>

<div className='detailsContainer'>
<div className="rHeading">
    <h3>Recipe</h3>

</div>

<div className='recipeDetails'>
<pre>
    {

`
    
Here's a simple recipe for Pumpkin Marshmallow Pie:

Ingredients:
- 1 9-inch pie crust (pre-made or homemade)
- 1 cup canned pumpkin puree
- 3/4 cup granulated sugar
- 1 tsp ground cinnamon
- 1/2 tsp ground ginger
- 1/4 tsp ground nutmeg
- 1/4 tsp salt
- 2 large eggs
- 1 cup evaporated milk
- 1 cup mini marshmallows

Instructions:
1. Preheat your oven to 425°F (220°C).
2. Place the pie crust in a 9-inch pie dish and crimp the edges as desired.
3. In a large mixing bowl, combine the pumpkin puree, sugar, cinnamon, ginger, nutmeg, and salt. Mix until well combined.
4. Beat in the eggs, one at a time, until fully incorporated.
5. Gradually stir in the evaporated milk until the mixture is smooth.
6. Pour the pumpkin mixture into the prepared pie crust.
7. Bake the pie in the preheated oven for 15 minutes.
8. After 15 minutes, remove the pie from the oven and carefully sprinkle the mini marshmallows over the top.
9. Return the pie to the oven and bake for an additional 20-25 minutes, or until the marshmallows are golden brown and the filling is set.
10. Once done, remove the pie from the oven and allow it to cool completely before serving.

Enjoy your delicious Pumpkin Marshmallow Pie!

`
}

</pre>
</div>

    







</div>
</div>


  )
}

export default RecipeDetails