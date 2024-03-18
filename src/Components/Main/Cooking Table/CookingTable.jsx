import PropTypes from 'prop-types'
import WantToCook from '../Want to Cook/WantToCook';

const CookingTable = ({cookingTable, currentlyCooking, HandMadeRecipe, handleCookingTime, handleFoodCalories}) => {

    const totalCookingTime = cookingTable.reduce((total, recipe) => total + recipe.preparing_time, 0) +
                            currentlyCooking.reduce((total, recipe) => total + recipe.preparing_time, 0);

    const totalCalories = cookingTable.reduce((total, recipe) => total + recipe.calories, 0) +
                          currentlyCooking.reduce((total, recipe) => total + recipe.calories, 0);

    return (
        <div className="lg:w-1/3">
            <div className="border-2 border-black-100 p-[32px] w-[460px] lg:w-[520px] m-auto rounded-xl mb-[50px]">
                <h1 className="lg:text-4xl text-2xl font-black mb-[24px] text-center">Want to cook: {cookingTable.length}</h1>
                <hr className="mb-[24px]"/>
                <div className='flex justify-between mb-[24px]'>
                    <p> </p>
                    <p>Name</p>
                    <p>Time</p>
                    <p>Calories</p>
                    <p> </p>
                    <p> </p>
                    <p> </p>
                </div>
                <hr className="mb-[24px]"/>
                {
                    cookingTable.map(wantToCook => <WantToCook
                        key={wantToCook.id} 
                        wantToCook={wantToCook} 
                        HandMadeRecipe={HandMadeRecipe} 
                        handleCookingTime = {handleCookingTime}
                        handleFoodCalories = {handleFoodCalories}
                        ></WantToCook>)
                }
                <h1 className="lg:text-4xl text-2xl font-black mb-[24px] text-center">Currently cooking: {currentlyCooking.length}</h1>
                <hr className="mb-[24px]"/>
                <div className='flex justify-between mb-[24px]'>
                    <p> </p>
                    <p>Name</p>
                    <p>Time</p>
                    <p>Calories</p>
                </div>
                <hr className="mb-[24px]"/>
                {
                    currentlyCooking.map(currentlyCookingRecipe => <WantToCook key={currentlyCookingRecipe.id} wantToCook={currentlyCookingRecipe} HandMadeRecipe={HandMadeRecipe} />)
                }
                <hr className="mb-[24px]"/>
                <div className="flex">
                    <p className="w-1/2">Total time: {totalCookingTime}</p>
                    <p className="w-1/2">Total calories: {totalCalories}</p>
                </div>
            </div>
        </div>
    );
};

CookingTable.propTypes = {
    cookingTable: PropTypes.array,
    currentlyCooking: PropTypes.array,
    HandMadeRecipe: PropTypes.func.isRequired,
    handleCookingTime: PropTypes.func,
    cookingTime: PropTypes.number,
    handleFoodCalories: PropTypes.func,
    foodCalories: PropTypes.number
}

export default CookingTable;
