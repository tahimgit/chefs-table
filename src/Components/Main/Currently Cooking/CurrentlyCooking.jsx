import PropTypes from 'prop-types'

const CurrentlyCooking = (currentlyCooking) => {
    const {id, recipe_name, preparing_time, calories} = currentlyCooking;
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
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

CurrentlyCooking.propTypes = {
    currentlyCooking: PropTypes.object
}


export default CurrentlyCooking;
