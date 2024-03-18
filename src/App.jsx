import { useState } from 'react'
import './App.css'
import Banner from './Components/Header/Banner/Banner'
import NavBar from './Components/Header/Nav Bar/NavBar'
import CookingTable from './Components/Main/Cooking Table/CookingTable'
import MainHeading from './Components/Main/Main Heading/MainHeading'
import RecipeCards from './Components/Main/Recipe List/Recipe Cards/RecipeCards'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const [cookingTable, setCookingTable] = useState([]);
  const [currentlyCooking, setCurrentlyCooking] = useState([]);


  const handleAddToWantToCook = recipeCard => {
    const newCookingTable = [...cookingTable, recipeCard];
    setCookingTable(newCookingTable);
  }

  const HandMadeRecipe = id => {
    const selectedRecipe = cookingTable.find(recipe => recipe.id === id);
    setCurrentlyCooking(prevState => [...prevState, selectedRecipe]);
    setCookingTable(prevState => prevState.filter(recipe => recipe.id !== id));
  }

  return (
    <>
      <div className='lg:w-[1320px] m-auto'>
        <NavBar></NavBar>
        <Banner></Banner>
        <MainHeading></MainHeading>
        <div className='lg:flex'>
          <RecipeCards handleAddToWantToCook={handleAddToWantToCook}></RecipeCards>
          <CookingTable 
          cookingTable={cookingTable} 
          currentlyCooking={currentlyCooking} 
          HandMadeRecipe={HandMadeRecipe} 
          ></CookingTable>
          <ToastContainer />
        </div>
      </div>
    </>
  )
}

export default App
