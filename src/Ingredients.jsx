import { useState } from "react";

export default function Ingredients(props) {
    const ingredientsListItems = props.ingredients.map((ingredient) => (
        <li >{ingredient}</li>
    ));    

    function toggleRecipeDisplay(){
        props.setRecipeShown(true)
    }
    return (
        <>
        <section>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
                {props.ingredients.length > 3 && <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients</p>
                    </div>
                    <button onClick={toggleRecipeDisplay}>Get a recipe</button>
                </div>}

            </section>
        </>
    )
}