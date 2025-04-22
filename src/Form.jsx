import { useState } from "react";

export default function Form(){
    const [ingredients, setIngredients] = useState(["Chicken", "Oregano", "Tomatoes"]);

    function handleSubmit(event){
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        console.log(formData.get("ingredients"));
        setIngredients([...ingredients, formData.get("ingredients")]);
    }

    return(
        <>
            <form onSubmit={handleSubmit} className="add-ingredient-form">
                <input 
                type="text"
                placeholder="e.g. Oregano"
                aria-label="Add Ingredient"
                name="ingredients"/>
                <button>Add Ingredient</button>
            </form>
            <ul>
                {ingredients.map(ingredient => (
                    <li>{ingredient}</li>
                ))}
            </ul>
        </>
    )
}