import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {compose, graphql } from 'react-apollo';
import ListRecipes from './queries/ListRecipes';


class App extends Component {
  render() {
    console.log('props: ', this.props)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {
          this.props.recipes.map((recipe, index) => (
            <div>
              <p>{recipe.name}</p>
            </div>
          ))
        }
      </div>
    );
  }
}

export default graphql(ListRecipes, {
  options: {
    fetchPolicy: 'cache-and-network'
  },
  props: props =>({
    recipes: props.data.listRecipes ? props.data.listRecipes.items : []
  })
}
)(App);
