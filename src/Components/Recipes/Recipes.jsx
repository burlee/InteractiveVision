import React, { Component } from 'react'
import classes from './Recipes.scss'

export default class Recipes extends Component {
    state = {
        recipes: [
            {id: 1, recipeName: 'Spagetti1', recipeDifficult: '1', ingredients: ['1','25','35','45','5'], description: ['Opis do przepisu pierwszego']},
            {id: 2, recipeName: 'Spagetti2', recipeDifficult: '1', ingredients: ['13','12','3','455','5', '6'], description: ['Opis do przepisu drugiego']},
            {id: 3, recipeName: 'Spagetti3', recipeDifficult: '1', ingredients: ['15','42','3','45','25', '1'], description: ['Opis do przepisu trzeciego']},
            {id: 4, recipeName: 'Spagetti4', recipeDifficult: '1', ingredients: ['14','22','3','4','532', '41'], description: ['Opis do przepisu czwartego']}
        ],
        choosenRecipeIngredients: ['1','2','3','4','5'],
        choosenRecipeDescription: ['Opis do przepisu pierwszego'],
        showRecipeDetails: false
    }

    showRecipeDetails = (recipeID) => {

        this.setState({showRecipeDetails: true});

        const recipes = [...this.state.recipes];

        recipes.map( recipe => {
            if( recipe.id === recipeID){
                this.setState({ choosenRecipeIngredients: recipe.ingredients })
            };
        });


        recipes.map( recipe => {
            if( recipe.id === recipeID){
                this.setState({ choosenRecipeDescription: recipe.description})
            }
        })
        
    };

    deleteRecipe = (recipeID) => {
        
        const recipes = [...this.state.recipes];

        let recipesFilltered = recipes.filter( recipe => {
            return recipe.id !== recipeID;
        })

        this.setState({ recipes: recipesFilltered })
    }

    render() {
        let recipeDisplay = this.state.recipes.map(( recipe, _index) => {
            return (
                <div key={recipe.id} className={classes.RecipeBox}>
                    <span>{recipe.id}. {recipe.recipeName}</span>
                    <div>
                        <i onClick={() => this.deleteRecipe(recipe.id)} className="fas fa-trash"></i>
                        <i onClick={() => this.showRecipeDetails(recipe.id)} className="fas fa-arrow-down"></i>
                    </div>
                </div>
            )
        });

        let recipeChoosenIngredients = this.state.choosenRecipeIngredients.map( (ingredient, _index) => {
                return <li key={_index}>{ingredient}</li>
        });

        let recipeChoosenDescription = this.state.choosenRecipeDescription.map( (recipeDescription, _index) =>{
            return <p key={_index}>{recipeDescription}</p>
        });

        return (
        <div className={classes.Wrapper}>
            <div className={classes.Recipes}>
                <header>
                    <span>Przepisy</span>
                    <span>Trudność</span>
                </header>
                {recipeDisplay}

                {this.state.showRecipeDetails ? 
                <div className={classes.RecipeDetails}>
                    <div>
                        <span>Składniki</span>
                        {recipeChoosenIngredients}
                    </div>
                    <div>
                        <span>Przygotowanie</span>
                        {recipeChoosenDescription}
                    </div>
                </div> 
                : null }

            </div>
        </div>
        )
    }
}
