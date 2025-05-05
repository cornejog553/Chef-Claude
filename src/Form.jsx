import { useState } from "react";
import Recipe from './Recipe.jsx';
import Ingredients from "./Ingredients.jsx";

export default function Form(){
    const [ingredients, setIngredients] = useState([]);
    const [recipeShown, setRecipeShown] = useState(false);

    function handleSubmit(formData){
        const newIngredient = formData.get("ingredients");
        console.log(newIngredient);
        setIngredients([...ingredients, newIngredient]);        
    }

    return(
        <>
            <form action={handleSubmit} className="add-ingredient-form">
                <input 
                type="text"
                placeholder="e.g. Oregano"
                aria-label="Add Ingredient"
                name="ingredients"/>
                <button>Add Ingredient</button>
            </form>
             
                {ingredients.length > 0 && <Ingredients ingredients = {ingredients} setRecipeShown={setRecipeShown} />}
            {recipeShown && <Recipe />}
            
        </>
    )
}