import PropTypes from "prop-types";
import "boxicons";
import { useState } from "react";
import { toast } from "react-toastify";

const RecipeCard = ({ recipeCard, handleAddToWantToCook }) => {
  const [clickCount, setClickCount] = useState(0);

  const handleButtonClick = () => {
    setClickCount((prevCount) => prevCount + 1);
    if (clickCount === 1) {
      toast.error("The selected recipe already exists!", {
        position: "top-right",
        autoClose: 3000, // 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      handleAddToWantToCook(recipeCard);
    }
  };

  const {
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
    recipe_image,
  } = recipeCard;

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl mb-[50px] m-auto">
        <figure className="px-10 pt-10">
          <img
            src={recipe_image}
            alt={`${recipe_name}`}
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-left">
          <h2 className="card-title">{recipe_name}</h2>
          <p>{short_description}</p>
          <hr />
          <div>
            <h2 className="card-title">Ingredients: {ingredients.length}</h2>
            {ingredients.map((ingredient, idx) => (
              <div key={idx}>
                <ul className="list-disc">
                  <li>{ingredient}</li>
                </ul>
              </div>
            ))}
          </div>
          <hr />
          <div className="flex justify-between">
            <p className="flex items-center">
              <box-icon name="stopwatch"></box-icon>
              {preparing_time} min
            </p>
            <p className="flex items-center">
              <box-icon name="hot" type="solid"></box-icon>
              {calories} cal
            </p>
          </div>
          <div className="card-actions">
            <button
              onClick={handleButtonClick}
              className="btn text-black bg-[#0BE58A] border-2 border-[#0BE58A] hover:bg-transparent hover:border-[#0BE58A] hover:text-[#0BE58A] rounded-full"
            >
              Want to Cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

RecipeCard.propTypes = {
  recipeCard: PropTypes.object.isRequired,
  handleAddToWantToCook: PropTypes.func,
};

export default RecipeCard;
