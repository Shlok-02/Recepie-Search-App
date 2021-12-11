import React,{useEffect,useState} from 'react';
import {Recipe} from "./components/Recipe";
import './App.css';

function App() {
  const[recipe,setRecipe]=useState([]);
  const[data1,setData]=useState('');
  const[query,setQuery]=useState('');

  const APIID="fb1519d7";
  const APIKEY="dbc8e2872eb4a2070a00e95f5995e561";
  const api=`https://api.edamam.com/search?q=${query}&app_id=${APIID}&app_key=${APIKEY}`


  useEffect(()=>{
      getData();
  },[query]);

  

  const getData=async ()=>{
    const response=await fetch(api);
    const data=await response.json(); 
    setRecipe(data.hits);
    console.log(recipe);
  }

  return (
    <div className="App">
      <h1>Recipe App </h1>
      <form className="form">
        <input className="search" onChange={(e)=>setData(e.target.value)} />
        <button className="btn" onClick={(e)=>{
          e.preventDefault();
          setQuery(data1);
          setQuery('');
        }}>Search</button>
      </form>
      <div className="grids">
      {
        recipe.map((item=>(
          <Recipe title={item.recipe.label} calories={item.recipe.calories} image={item.recipe.image} ingredients={item.recipe.ingredientLines}        />
        )))
      }
      </div>
  
    </div>
  );
}

export default App;
