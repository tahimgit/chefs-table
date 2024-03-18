import { useEffect } from "react";
import { useState } from "react";
import RecipeCard from "../Recipe Card/RecipeCard";
import PropTypes from 'prop-types'

const RecipeCards = ({handleAddToWantToCook}) => {

    const [recipeCards, setRecipeCards] = useState([]);

    useEffect( ()=>{
        fetch('recipies.json')
        .then(res => res.json())
        .then(data => setRecipeCards(data))
    }, [])

    return (
        <div className="lg:w-2/3">
            <div className="grid lg:grid-cols-2">
                {
                    recipeCards.map(recipeCard => <RecipeCard 
                        key={recipeCard.id} 
                        recipeCard={recipeCard}
                        handleAddToWantToCook = {handleAddToWantToCook}
                        ></RecipeCard>)
                }
            </div>
        </div>
    );
};

RecipeCards.propTypes = {
    handleAddToWantToCook: PropTypes.func
}

export default RecipeCards;
