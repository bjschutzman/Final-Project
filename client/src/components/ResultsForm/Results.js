import React from 'react';


const results = (props) => {
     return(
        <div className = "recipeResults">
            <header>{props.title}</header>
            <ul>{props.children}</ul>
            <img>{props.img}</img>
           <span onClick = {() => this.delete(recipe.id)} className = 'delete-btn' roll = 'button' tabIndex = '0'>x</span>
        </div>
    )
}

export default results;