import React from 'react';
import axios from 'axios';
import List from './list.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pokeList : []
    }
    this.getAllPokemon = this.getAllPokemon.bind(this);
  }

  componentDidMount(){
    console.log('Mounted!');
    this.getAllPokemon()
  }

  getAllPokemon(){
    axios
    .get('/api')
    .then((items)=>{
      this.setState({
        pokeList : items.data
      })
      console.log(this.state.pokeList)
    })
    .catch(err =>{
      console.error(err);
    })
  }

  render() {
  return (
    <div>
      <div className="menu">
        <h1>Pokemon!</h1>
        <div className="menuOptions">
          <button OnClick={this.getAllPokemon}>Show All</button>
          <select id="type">
            <option>Sort by Type</option>
            <option>Grass</option>
            <option>Fire</option>
            <option>Water</option>
            <option>Normal</option>
            <option>Poison</option>
            <option>Electric</option>
            <option>Ground</option>
            <option>Fighting</option>
            <option>Psychic</option>
            <option>Rock</option>
            <option>Ghost</option>
            <option>Dragon</option>
          </select>
          <button>INSERT</button>
        </div>
      </div>
      <div className="list">
        {this.state.pokeList.map((pokemon)=>{
          return (
            <List
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.pokeName}
            type={pokemon.pokeType}
            image={pokemon.pokeImg}
            />
          )
        })}
      </div>
    </div>
  )}
}


export default App;