import PropTypes from 'prop-types'

const WantToCook = ({wantToCook, HandMadeRecipe, handleCookingTime}) => {
    const {id, recipe_name, preparing_time, calories} = wantToCook;
    const handleClick = () =>{
        HandMadeRecipe(id);
        handleCookingTime(preparing_time);
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>{id}</th>
                        <td>{recipe_name}</td>
                        <td>{preparing_time}</td>
                        <td>{calories}</td>
                        <td> <button onClick={handleClick} className="btn text-black bg-[#0BE58A] border-2 border-[#0BE58A] hover:bg-transparent hover:border-[#0BE58A] hover:text-[#0BE58A] rounded-full">Preparing</button></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

WantToCook.propTypes = {
    wantToCook: PropTypes.object,
    HandMadeRecipe: PropTypes.func.isRequired,
    handleCookingTime: PropTypes.func
}

export default WantToCook;
